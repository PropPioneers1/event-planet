import toast from "react-hot-toast";
import { PropTypes } from "prop-types";
import { uploadImage } from "../../../../api/utlis";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const Modal = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.files[0];
        const boardName = form.name.value;

        try {
            // Upload Image
            const imageData = await uploadImage(photo);
            const board = {
                boardName,
                boardBgImg: imageData?.data?.display_url,
                planerName: user?.displayName,
                task:{
                    toDo:[],
                    progress:[],
                    completed:[]
                }

            };
            console.log(board);
            //   Send data to the Database
            const { data } = await axiosSecure.post("/create-projects", board);
            console.log(data);
            if (data?.insertedId) {
                toast.success("Successfully Created A Project!");
                form.reset();
            }
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <div className="absolute bg-white w-[90%] md:w-[550px] py-5 px-4 rounded-lg z-50">
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Select Board Image</span>
                    </label>
                    <input
                        type="file"
                        placeholder="Select Image"
                        name="photo"
                        className="border border-gray-300 rounded-md hover:outline-1 outline-gray-400 p-3"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Board Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Board Name"
                        name="name"
                        className="border border-gray-300 rounded-md p-3"
                        required
                    />
                </div>
                <button
                    className="w-full font-semibold mt-6 py-3 rounded-md transition-all duration-300 ease-in bg-gradient-to-tl from-[#861f42] to-primary hover:bg-gradient-to-tr text-white"
                >
                    Create Board
                </button>
            </form>
        </div>
    );
};

Modal.propTypes = {
    refetch: PropTypes.func,
};

export default Modal;