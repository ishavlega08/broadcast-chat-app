import { useEffect, useRef, useState } from "react"
import { Button } from "./ui/Button"
import { Input } from "./ui/Input"

interface ChatRoomProps {
    roomCode: string
    onExit: () => void
}

export const ChatRoom = ({ roomCode, onExit }: ChatRoomProps) => {
    const [messages, setMessages] = useState<string[]>([]);
    const wsRef = useRef<WebSocket | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8080");
        wsRef.current = ws;

        ws.onopen = () => {
            console.log("websocket connected");
            ws?.send(
                JSON.stringify({
                    type: "join",
                    payload: {
                        roomId: roomCode
                    }
                })
            )
        }

        ws.onmessage = (event) => {
            setMessages((m) => [...m, event.data]);
        }

        ws.onerror = (error) => {
            console.error("websocket error: ", error);
        }

        ws.onclose = (event) => {
            console.log("websocket disconnected: ", event.reason);
        }
    
        return () => {
            if(ws) {
                ws.close();
            }
        }
    }, [roomCode]);
    
    const sendMessage = () => {
        if(inputRef.current && wsRef.current) {
            const message = inputRef.current.value;
    
            wsRef.current.send(
                JSON.stringify({
                type: "chat",
                payload: {
                    message: message
                }
                })
            )
    
            inputRef.current.value = "";
        }
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <Button onClick={onExit} variant="secondary">
                    ← Exit  
                </Button>
                <div className="text-sm text-zinc-400">
                    Room Code: <span>{roomCode}</span>
                </div>
            </div>

            <div className="h-[400px] border border-zinc-800 rounded-md p-4 overflow-y-auto">
                {messages.map((message, index) => (
                    <div key={index} className="bg-zinc-800 text-white rounded-xl max-w-xs p-2 mt-3">
                        {message}
                    </div>
                ))}
            </div>
            
            <div className="p-4 border-t border-zinc-800 flex">
                <Input
                    ref={inputRef}
                    type="text"
                    placeholder="Message..."
                    className="flex-grow mr-2 bg-zinc-800 text-white"
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                />
                <Button onClick={sendMessage}>Send</Button>
            </div>
        </div>
    )
}