import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

const PrivateRoute = () => {
    const [user] =  useAuthState(auth);
    const location = useLocation()
    return user ? <Outlet/> : <Navigate to='/login' state={{from:location}} replace/>;
}

export default PrivateRoute;
