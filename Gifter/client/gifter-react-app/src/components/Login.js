import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(UserContext);
  const navigate = useNavigate()

  const submitLoginForm = (e) => {
    e.preventDefault();
    login({ email, password });

    navigate("/home");
    window.location.reload(true);
                
                // window.location.reload(false); 
  };

  return (
    <>
      <>
        <h2 className="navbar navbar-expand navbar-light bg-info">Log In</h2>
        <form>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <button type="submit" onClick={submitLoginForm}>
            Log In
          </button>
        </form>
        <p>Not user? Please register</p>
        <button>
      <Link to="/register" className="nav-link">
      Register 
      </Link>
     </button>
      </>
    </>
  );
};
