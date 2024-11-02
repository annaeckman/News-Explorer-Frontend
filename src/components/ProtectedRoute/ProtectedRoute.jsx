import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
  isLoggedIn,
  setProtectedDestination,
}) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      setProtectedDestination(location.pathname);
      navigate("/");
    }
  }, [isLoggedIn, navigate, location.pathname, setProtectedDestination]);

  if (!isLoggedIn) return;
  if (isLoggedIn) return children;
}
