import { Button } from "../components/ui/Button"

export const Home = () => {
    return <div className="bg-black h-screen flex justify-center items-center">
        <div className="bg-customGray w-1/3 flex flex-col justify-center items-center p-6 rounded border border-gray-700">
            <h1 className="text-white text-3xl font-semibold">Broadcast Chat</h1>
            <p className="text-gray-400 mt-1">Create or join a room to start chatting</p>

            <div className="flex flex-col mt-3">
                <Button>
                    Create Room
                </Button>

                <Button>
                    Join Room
                </Button>
            </div>
        </div>
    </div>
}