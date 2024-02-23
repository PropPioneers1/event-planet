import  { useEffect, useState } from "react";
import { MdNotificationsActive } from "react-icons/md";
import useMessage from "../../hooks/useMessage";

const NotificationMessage = () => {
    const [message, setMessage] = useMessage();
    const [unreadCount, setUnreadCount] = useState(0);
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        // Count unread messages
        const newMessages = message.filter(msg => !msg.read);
        setUnreadCount(newMessages.length);
        
        // Check if there are new messages
        if (newMessages.length > 0) {
            setShowNotification(true);
        } else {
            setShowNotification(false);
        }
    }, [message]);

    const handleNotificationClick = () => {
        // Hide the notification icon when clicked
        setShowNotification(false);
    };

    return (
        <div>
            <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className="m-1" onClick={handleNotificationClick}>
                    {showNotification ? (
                        <div className="flex items-center relative">
                            <MdNotificationsActive className="h-8 w-7" />
                            <span className="bg-red-500 text-white rounded-full px-1 py-1 ml-1 absolute -top-2 -right-2">{unreadCount}</span>
                        </div>
                    ) : (
                        <MdNotificationsActive className="h-8 w-7" />
                    )}
                </div>
                <ul tabIndex={0} className="dropdown-content text-black z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    {message.map((messageInfo, id) => (
                        <li className="mb-2 mt-2 border p-3" key={id}>{messageInfo.body}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NotificationMessage;
