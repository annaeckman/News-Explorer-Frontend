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

// this protected route is firing after refresh on saved-news page.
// so using isLoggedIn, isn't working, i have to figure out a way
// to tell if the jwt check has happened or not??
