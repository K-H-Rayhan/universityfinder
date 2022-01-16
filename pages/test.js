// import { useRef, useState } from "react";
// import { useRouter } from "next/router";
// export default function Contact() {
//   const [stream, setStream] = useState();
//   const strnx = useRef();
//   async function startCapture(displayMediaOptions) {
//     let captureStream = null;

//     try {
//       captureStream = await navigator.mediaDevices.getDisplayMedia(
//         displayMediaOptions
//       );
//     } catch (err) {
//       console.error("Error: " + err);
//     }
//     return captureStream;
//   }
//   const x = () => {
//     startCapture({
//       audio: true,
//       video: true,
//     }).then((stream) => {
//       strnx.current.srcObject = stream;
//     });
//   };

//   return (
//     <div>
//       <video id="gum-local" autoPlay controls ref={strnx}></video>
//       {console.log(stream)} <button onClick={x}>Stream Display</button>
//     </div>
//   );
// }
