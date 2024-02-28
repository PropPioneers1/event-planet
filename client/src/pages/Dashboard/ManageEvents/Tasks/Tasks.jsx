import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import toast from "react-hot-toast";


const Tasks = () => {


    const axiosSecure = useAxiosSecure();
    const { id } = useParams();

    const [isCard, setIsCard] = useState(false);

    // fetching single board
    const { data: board = {}, isPending } = useQuery({
        queryKey: ["board"],
        queryFn: async () => {
            const result = await axiosSecure.get(
                `/eventTask/${id}`
            );
            return result?.data;
        },
    });

    // fetching all todo
    const { data: todo = [], refetch } = useQuery({
        queryKey: ["todo"],
        queryFn: async () => {
            const result = await axiosSecure.get(
                `/eventTodo/${id}`
            );
            return result?.data;
        },
    });
    console.log(todo);
    console.log(id);



    // function for creating new TODO
    const handleAddTodo = async (e) => {
        e.preventDefault();
        const description = e.target.todo.value;

        const todo = {
            description,
            date: new Date(),
            boardId: id,
            status: "todo"
        }

        // sending todo to server
        const result = await axiosSecure.post(`/eventTodo`, todo);
        if (result) {
            toast.success("Todo Added Successfully")
            refetch();
            setIsCard(false)
        }
    }

    if (isPending) {
        return <h2>Loading....</h2>
    }


    return (
        <div className="bg-white min-h-screen p-4 text-[#574d4d]"
        // style={{ 
        //     backgroundImage: `url(${board?.boardBgImg})`,
        //     backgroundPosition: "center",
        //     backgroundSize:"cover",
        //     backgroundRepeat: "no-repeat",
        //     }}
        >
            {/* <h2 className="text-2xl font-semibold my-6 text-center">{board?.boardName}</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1280px] ">
                {/* Todo */}
                <div className="bg-neutral p-4 rounded-md ">
                    <h2 className="text-xl font-semibold">{board?.boardName}: Todo</h2>

                    {/* Showing previous toDos */}
                    <div className="mt-4">
                        {
                            todo?.map((item, idx) =>
                                <div key={idx}
                                    className="bg-white mt-2 py-4 px-2 rounded-md shadow"
                                    draggable>
                                    <h2>{item?.description}</h2>
                                </div>)
                        }
                    </div>
                    {/* add a new card */}
                    {
                        !isCard &&
                        <div
                            onClick={() => setIsCard(true)}
                            className="flex items-center gap-2 mt-6 cursor-pointer rounded-md py-2 hover:bg-gray-300">
                            <GoPlus size={24} />
                            <h3 className="text-lg font-semibold">Add a card</h3>
                        </div>
                    }
                    {/* Input field for add new card */}
                    {
                        isCard &&
                        <div className="mt-6">
                            <form onSubmit={handleAddTodo} >
                                <textarea
                                    placeholder="Add Todo"
                                    name="todo"
                                    className="textarea resize-none textarea-bordered min-h-[36px]  h-auto w-full focus:outline-none"

                                ></textarea>
                                <div className="flex items-center gap-2">
                                    {/* Add card button */}
                                    <button
                                        className=" px-3 py-1 rounded-md bg-accent text-white text-lg"
                                        type="submit">
                                        Add card
                                    </button>
                                    {/* cancel button */}
                                    <button
                                        onClick={() => setIsCard(false)}
                                        className="btn "
                                    >
                                        <RxCross2 className="text-2xl" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    }
                </div>
                {/* In Progress */}
                <div className="bg-neutral p-4 rounded-md">
                    <h2 className="text-xl font-semibold">{board?.boardName}: Progress</h2>
                </div>
                {/* Completed */}
                <div className="bg-neutral p-4 rounded-md">
                    <h2 className="text-xl font-semibold">{board?.boardName}: Completed</h2>
                </div>
            </div>
        </div>
    );
};

export default Tasks;