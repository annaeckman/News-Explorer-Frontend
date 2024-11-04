import { Navigate } from "react-router-dom";
import Nav from "../Nav/Nav";
// When i load the app, isLoggedIn will be false, pretty much always

const ProtectedRoute = ({ children, isLoggedIn, isAuthSettled }) => {
  if (!isAuthSettled) {
    return <Nav isInverse={true} />;
  }

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};
export default ProtectedRoute;
