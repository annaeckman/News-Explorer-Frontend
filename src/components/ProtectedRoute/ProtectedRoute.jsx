import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export const ProtectedRoute = ({ children }) => {
  const { currentUser, setProtectedDestination } =
    useContext(CurrentUserContext);

  const location = useLocation();
  const navigate = useNavigate();

  if (currentUser.name === "") {
    setProtectedDestination(location.pathname);
    navigate("/");
  }
  if (currentUser) return children;
};
