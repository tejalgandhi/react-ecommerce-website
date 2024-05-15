import React, { useEffect } from "react";
import { logout } from "../../Service/UserService";

const Logout = () => {
  useEffect(() => {
    logout();
    window.location = "/";
  }, []);

  return null;
};

export default Logout;
