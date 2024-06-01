import React, { useEffect, useState } from "react";
import { me } from "../services/auth_service";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState("");
  const [load, setLoad] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    getLoginUser();
  }, []);

  const getLoginUser = async () => {
    setLoad(true);
    const response = await me();
    const user = response?.data;
    setUser(user);
    setLoad(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <div>{load ? "loading" : user?.name}</div>
      <button onClick={handleLogout}>LogOut</button>
    </div>
  );
}

export default Profile;
