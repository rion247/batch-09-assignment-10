import { useContext } from "react";
import { AuthContext } from './../AuthProvider/AuthProvider';
import PropTypes from 'prop-types';
import Loader from "../Loader/Loader";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    const location = useLocation;

    if(loading){
        return <Loader></Loader>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/' replace /> ;

};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;