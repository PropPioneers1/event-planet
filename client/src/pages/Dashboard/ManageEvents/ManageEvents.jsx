import { useState } from "react";
import createProjectImg from "../../../assets/image/createProject-img.png"
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Modal from "./Shared/Modal";

const ManageEvents = () => {

    const [isModal, setIsModal] = useState(false);


    return (
        <div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div
                    onClick={() => setIsModal(!isModal)}
                    className="w-full cursor-pointer rounded-[10px]  p-5 bg-white mt-6"
                >
                    <div className="bg-[#fa782f66] h-[180px] rounded-[10px] grid place-items-center">
                        <img src={createProjectImg} alt="" />
                    </div>
                    <h3 className="font-semibold text-xl text-center pt-2.5">
                        Create a new board
                    </h3>
                </div>

                {/* Modal For Create new Board */}
                <div
                    className={`${isModal ? "block" : "hidden"} absolute top-0
           left-0  w-full min-h-full grid place-items-center`}
                >
                    <Modal />
                    <div
                        onClick={() => setIsModal(false)}
                        className="z-30  fixed top-0 left-0 h-screen w-full bg-[#000000b3]"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default ManageEvents;