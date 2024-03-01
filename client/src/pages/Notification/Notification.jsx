import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { onMessageListener, requestForToken } from "./TestNotification";
import axios from "axios";
// import { onMessageListener, requestForToken } from '../../firebase/firebase.config';

const Notification = () => {
  const [notification, setNotification] = useState({ title: "", body: "" });
  const notify = () => toast(<ToastDisplay />);
  function ToastDisplay() {
    return (
      <div>
        <p>
          <b>{notification?.title}</b>
        </p>
        <p>{notification?.body}</p>
      </div>
    );
  }

  useEffect(() => {
    if (notification?.title) {
      notify();
    }
  }, [notification]);

  requestForToken();

  console.log(requestForToken);

  console.log(notification?.body);

  if (notification?.body) {
    const body = notification?.body;
    axios.post(`https://event-planet-server.vercel.app/message`, { body });
  }

  onMessageListener()
    .then((payload) => {
      setNotification({
        title: payload?.notification?.title,
        body: payload?.notification?.body,
      });
    })
    .catch((err) => console.log("failed: ", err));

  return <Toaster />;
};

export default Notification;
