import { useContext } from "react";
import { useAuth } from "../App";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { isAdmin, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex text-3xl justify-center items-center h-screen">
        Loading...
      </div>
    );
  }
 
  if (isAdmin?.email) {
    return children;
  }
  
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRouter;