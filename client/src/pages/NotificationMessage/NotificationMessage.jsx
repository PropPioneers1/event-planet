// import { useEffect, useState } from "react";
import { MdNotificationsActive } from "react-icons/md";
import useMessage from "../../hooks/useMessage";


const NotificationMessage = () => {

    // const [message, setMessage] = useState([]);

    const [message] = useMessage();

    

    return (
        <div>
            <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className=" m-1"><MdNotificationsActive className="h-8 w-7"></MdNotificationsActive></div>
                <ul tabIndex={0} className="dropdown-content text-black z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    {
                        message?.map((messageInfo, id) => (
                            <li className="mb-2 mt-2 border p-3" key={id}>{messageInfo?.body}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default NotificationMessage;