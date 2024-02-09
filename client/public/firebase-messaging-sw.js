
// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyC7Pb6obS3qEGICSi2UzdJoNatbQywJ_xY",
    authDomain: "event-planet-9789f.firebaseapp.com",
    projectId: "event-planet-9789f",
    storageBucket: "event-planet-9789f.appspot.com",
    messagingSenderId: "641939071314",
    appId: "1:641939071314:web:fa66321110510220739a8b"
  };


firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

// Handle incoming messages while the app is not in focus (i.e in the background, hidden behind other tabs, or completely closed).
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});