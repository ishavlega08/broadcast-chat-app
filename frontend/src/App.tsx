import { useState } from "react"
import { Button } from "./components/ui/Button";
import { CreateRoom } from "./components/CreateRoom";
import { JoinRoom } from "./components/JoinRoom";
import { ChatRoom } from "./components/ChatRoom";

function App() {
  const [view, setView] = useState<"main" | "create" | "join" | "chat">("main");
  const [roomCode, setRoomCode] = useState<string | null>(null);

  const handleRoomJoined = (code: string) => {
    setRoomCode(code);
    setView("chat");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-white mb-2">BroadCast Chat</h1>
        <p className="text-center text-zinc-400 mb-6">Create or join a room to start chatting</p>

        {view === "main" && (
          <div className="space-y-4">
            <Button onClick={() => setView("create")} className="w-full">
              Create Room
            </Button>
            <Button onClick={() => setView("join")} className="w-full">
              Join Room
            </Button>
          </div>
        )}

        {view === "create" && (
          <CreateRoom onRoomCreated={handleRoomJoined}/>
        )}

        {view === "join" && (
          <JoinRoom onRoomJoined={handleRoomJoined}/>
        )}

        {view === "chat" && roomCode && (
          <ChatRoom
            roomCode={roomCode}
            onExit={() => setView("main")}
          />
        )}
      </div>
    </div>
  )
}

export default App
