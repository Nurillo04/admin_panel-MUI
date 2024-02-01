import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.scss";

const Profile = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <div className="profil">
      <h1>Profile Page</h1>
      <h2>
        Username : <span>Nurillo</span>
      </h2>
      <h2>
        Password : <span>*********</span>
      </h2>
      <Button onClick={handleLogout} variant="contained">
        LogOut
      </Button>
    </div>
  );
};

export default Profile;
