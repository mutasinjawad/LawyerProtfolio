import { useAuth } from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { isAdmin, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-3xl">
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