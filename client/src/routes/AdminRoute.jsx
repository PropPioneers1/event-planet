
import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";


// eslint-disable-next-line react/prop-types
const AdminRoute = ({children }) => {
    const {role,isRolePending} = useRole();
    if(isRolePending) return <div>Loading ...</div>
    if(role === 'admin') return children
    return <Navigate to='/dashboard' />
};

export default AdminRoute;