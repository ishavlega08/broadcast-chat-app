import { useState } from "react"
import { Input } from "./ui/Input"
import { Label } from "./ui/Label"
import { Button } from "./ui/Button"

interface JoinRoomProps {
    onRoomJoined: (roomCode: string) => void
}

export const JoinRoom = ({ onRoomJoined }: JoinRoomProps) => {
    const [roomCode, setRoomCode] = useState("");

    const handleJoinRoom = () => {
        if(roomCode) {
            onRoomJoined(roomCode)
        }
    }

    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="room-name">Room Code</Label>
                <Input 
                    type="text"
                    placeholder="Enter room code"
                    value={roomCode}
                    onChange={(e) => setRoomCode(e.target.value)}
                />
            </div>

            <Button
                onClick={handleJoinRoom}
                disabled={!roomCode}
                className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Join Room
            </Button>
        </div>
    )
}