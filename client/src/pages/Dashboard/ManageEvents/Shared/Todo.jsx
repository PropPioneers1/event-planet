import PropTypes from 'prop-types';
import { useDrag } from "react-dnd";

const Todo = ({ item }) => {
    const [{ isDragging }, drag] = useDrag({
        type: "todo",
        item: { type: "todo", ...item },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={drag}
            className={`bg-white mt-2 py-4 px-2 rounded-md shadow ${isDragging ? "opacity-50" : ""}`}
        >
            <h2>{item?.description}</h2>
        </div>
    );
};

Todo.propTypes = {
    item: PropTypes.object
};

export default Todo;
