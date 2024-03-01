// Import the functions you need from the SDKs you need
// import axios from "axios";
import { initializeApp } from "firebase/app";
// import { getMessaging, onMessage, getToken } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7Pb6obS3qEGICSi2UzdJoNatbQywJ_xY",
  authDomain: "event-planet-9789f.firebaseapp.com",
  projectId: "event-planet-9789f",
  storageBucket: "event-planet-9789f.appspot.com",
  messagingSenderId: "641939071314",
  appId: "1:641939071314:web:fa66321110510220739a8b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// const messaging = getMessaging();

// export const requestForToken = async () => {

//   try {
//     const currentToken = await getToken(messaging, { vapidKey: 'BN4_7aNJDbWeHLEXhUS9M-tVJCLqq-gDRYvB3wC6Ma03hkLxthaAep1uJtOa--LSBzyeaVmPvDIIJtau9TLWZww' });
//     if (currentToken) {
//       console.log('Current token for client:', currentToken);
//       const notificationToken = { token: currentToken };
//       await axios.post(`https://server-orpin-alpha.vercel.app/token`, notificationToken);
//     } else {
//       console.log('No registration token available. Request permission to generate one.');
//     }
//   } catch (err) {
//     console.error('An error occurred while retrieving token:', err);
//   }
// };

//   export const onMessageListener = () =>
//   new Promise((resolve) => {
//     onMessage(messaging, (payload) => {
//       console.log("payload", payload)
//       resolve(payload);
//     });
//   });
