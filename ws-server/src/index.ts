import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
    socket: WebSocket;
    room: string;
}

let allSockets: User[] = [];

wss.on("connection", (socket) => {
    console.log("User connected");

    socket.on("message", (message) => {
        // @ts-ignore
        const parsedMessage = JSON.parse(message);

        if(parsedMessage.type === "join") {
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId
            })
        }

        if(parsedMessage.type === "chat") {
            // @ts-ignore
            const currentUserRoom = allSockets.find((x) => x.socket === socket).room;

            for(let i=0; i<allSockets.length; i++) {
                if(allSockets[i].room === currentUserRoom) {
                    allSockets[i].socket.send(parsedMessage.payload.message);
                }
            }
        }
    });

    socket.on("disconnect", () => {
        // @ts-ignore
        allSockets = allSockets.filter(x => x != socket);
    })
});