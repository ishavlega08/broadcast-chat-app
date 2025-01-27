import { useRef, useState } from "react"
import { Input } from "./ui/Input"
import { Label } from "./ui/Label"
import { Button } from "./ui/Button"

interface CreateRoomProps {
    onRoomCreated: (roomCode: string) => void
}

export const CreateRoom = ({ onRoomCreated }: CreateRoomProps) => {
    const [roomCode, setRoomCode] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const generateRoomCode = () => {
        const code = Math.random().toString(36).substring(2, 8).toUpperCase();
        setRoomCode(code)
    }

    const copyRoomCode = () => {
        if(inputRef.current) {
            inputRef.current.select();
            document.execCommand("copy");
        }
    }

    const handleCreateRoom = () => {
        if(roomCode) {
            onRoomCreated(roomCode);
        }
    }

    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="room-code">Room Code</Label>
                <div className="flex space-x-2">
                    <Input 
                        type="text"
                        placeholder="Room Code"
                        value={roomCode}
                        ref={inputRef}
                        readOnly
                    />
                    <Button onClick={copyRoomCode} variant="secondary">
                        Copy
                    </Button>
                </div>
            </div>
            <Button onClick={generateRoomCode} className="w-full">
                Generate Room Code
            </Button>
            <Button 
                onClick={handleCreateRoom}
                disabled={!roomCode}
                className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Create Room
            </Button>
        </div>
    )
}