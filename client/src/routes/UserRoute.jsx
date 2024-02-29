import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";


// eslint-disable-next-line react/prop-types
const UserRoute = ({children}) => {
    const {role,isRolePending} = useRole();
    if(isRolePending) return <div>Loading ...</div>
    if(role === 'user') return children
    return <Navigate to='/dashboard' />
};

export default UserRoute;