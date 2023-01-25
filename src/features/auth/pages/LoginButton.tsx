import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@material-ui/core/Button";

const LoginButton = ({ onClickLogin }: any) => {
  const { loginWithRedirect } = useAuth0();

  function handleLoginClick() {
    loginWithRedirect();
    onClickLogin();
  }

  return (
    <Button variant='contained' color='primary' size='large' onClick={handleLoginClick}>
      Log In
    </Button>
  );
};

export default LoginButton;
