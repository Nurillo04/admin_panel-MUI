import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = ({ setUser, setName }) => {
  const { data, setData } = useState;

  const navigate = useNavigate();

  const handleClick = () => {
    setUser(data);
    navigate("/");
  };
  return (
    <div>
      <form className="forms">
        <h1 className="title">Login</h1>
        <input
          placeholder="Name..."
          className="confirm"
          type="text"
          name="username"
          id="username"
          value={data}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Username..."
          className="confirm"
          type="text"
          name="username"
          required
          id="username"
          value={data}
        />
        <NavLink to="/profile">
          <Button onClick={handleClick} variant="contained">
            {" "}
            Login
          </Button>
        </NavLink>
      </form>
    </div>
  );
};

export default Login;
