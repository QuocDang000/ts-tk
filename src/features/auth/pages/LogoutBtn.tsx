import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppDispatch } from "app/hooks";
import { authActions } from "../authSlice";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const dispatch = useAppDispatch()

  const handleLogoutClick = () => {
    logout({ logoutParams: { returnTo: `${window.location.origin}/login` } })
    dispatch(authActions.logout())
  }

  return (
    <button onClick={handleLogoutClick}>
      Log out
    </button>
  );
};

export default LogoutButton;