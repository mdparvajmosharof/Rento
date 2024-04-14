import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import {Navigate} from "react-router-dom"
import PropTypes from 'prop-types'; 

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-black dark:border-violet-600 mx-auto mt-40"></div>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;

PrivateRoutes.propTypes ={
    children : PropTypes.node
}