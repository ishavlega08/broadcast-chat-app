import { Home } from "./pages/home";

function App() {
  return <div className="">
    <Home />
  </div>
}

// import { useEffect, useRef, useState } from 'react'

// function App() {
//   const [messages, setMessages] = useState(["hi there"]);
//   const wsRef = useRef();
//   const inputRef = useRef();

//   useEffect(() => {
//     const ws = new WebSocket("ws://localhost:8080");

//     ws.onmessage = (event) => {
//       setMessages(m => [...m, event.data]);
//     }

//     wsRef.current = ws;

//     ws.onopen = () => {
//       ws.send(JSON.stringify({
//         type: "join",
//         payload: {
//           roomId: "123123"
//         }
//       }));
//     }

//     return () => {
//       ws.close();
//     }
//   }, []);

//   return (
//     <div className='h-screen bg-black'>
//       <div className='h-[90vh] p-4 overflow-scroll'>
//         {messages.map(message => (
//           <div className='bg-gray-200 text-black rounded-xl w-40 p-2 mt-3'>
//             {message}
//           </div>
//         ))}
//       </div>

//       <div className='w-full border-t border-gray-300'>
//         <input ref={inputRef} type="text" placeholder='Message...' className='p-4 w-[85vw] outline-none bg-black text-lg text-white border-r'/>

//         <button onClick={() => {
//           const message = inputRef.current.value;

//           wsRef.current.send(JSON.stringify({
//             type: "chat",
//             payload: {
//               message: message
//             }
//           }));
//         }} className='bg-black text-white text-lg p-4'>
//           Send Message
//         </button>
//       </div>
//     </div>
//   )
// }

export default App
