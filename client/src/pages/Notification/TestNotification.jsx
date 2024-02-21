import { useEffect } from "react";
import axios from "axios";
import { getMessaging, onMessage, getToken } from "firebase/messaging";
import useAuth from "../../hooks/useAuth";

export const requestForToken = async () => {
  const messaging = getMessaging();

  try {
    const currentToken = await getToken(messaging, {
      vapidKey:
        "BN4_7aNJDbWeHLEXhUS9M-tVJCLqq-gDRYvB3wC6Ma03hkLxthaAep1uJtOa--LSBzyeaVmPvDIIJtau9TLWZww",
    });
    if (currentToken) {
      console.log("Current token for client:", currentToken);
      const notificationToken = { token: currentToken };
      await axios.post(`http://localhost:5000/token`, notificationToken);
    } else {
      console.log(
        "No registration token available. Request permission to generate one."
      );
    }
  } catch (err) {
    console.error("An error occurred while retrieving token:", err);
  }
};

export const onMessageListener = () => {
  const messaging = getMessaging();
  return new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      resolve(payload);
    });
  });
};

const TestNotification = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (user && user?.email) {
      // Call requestForToken only when user is available
      requestForToken();

      // Resolve the promise returned by onMessageListener()
      const handleIncomingMessage = async () => {
        const payload = await onMessageListener();
        console.log("Received message:", payload);
        // Handle the received message as needed
      };
      handleIncomingMessage();
    }
  }, [user]);

  return null; // Or return JSX elements if you want to render something
};

export default TestNotification;
