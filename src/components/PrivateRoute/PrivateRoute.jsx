import { useContext } from "react";
import { AuthContext } from './../AuthProvider/AuthProvider';
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);


    return <Navigate state={location.pathname} to='/' replace /> ;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;