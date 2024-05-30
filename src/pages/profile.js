import React, { useEffect, useState } from "react";
import { me } from "../services/auth_service";

function Profile() {
  const [user, setUser] = useState();
  useEffect(() => {
    getLoginUser();
  }, []);

  const getLoginUser = async () => {
    const response = await me();
    const user = response?.data;
    setUser(user);
  };

  return <div> {user?.name}</div>;
}

export default Profile;
