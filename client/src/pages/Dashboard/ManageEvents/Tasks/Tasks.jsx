import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";


const Tasks = () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {id} = useParams()

    const { data: board = {},  } = useQuery({
        queryKey: ["board", user?.email],
        queryFn: async () => {
            const result = await axiosSecure.get(
                `/eventTask/${id}`
            );
            return result?.data;
        },
    });
console.log(board);

    return (
        <div className="bg-white min-h-screen p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Todo */}
                <div className="bg-neutral">
                    <h2>Todo</h2>
                </div>
                {/* In Progress */}
                <div>
                    <h1>In Progress</h1>
                </div>
                {/* Completed */}
                <div>
                    <h1>Completed</h1>
                </div>
            </div>
        </div>
    );
};

export default Tasks;