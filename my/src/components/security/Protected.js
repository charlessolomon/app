import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const Protected = ({ children }) => {

    const user = useSelector((state) => state.auth.user)
    let isLoggedIn = isUser(user)

    function isUser(object) {
        for (const property in object) {
          return true;
        }
        return false;
    }

    if (!isLoggedIn) {

        console.log("==================");
        console.log("You are not Logged In");
        console.log("==================");

        return <Navigate to="/login" replace />;
    }
    return children;
};

export default Protected;