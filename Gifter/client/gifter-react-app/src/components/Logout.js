import { useNavigate } from "react-router-dom"
import React, { useContext, useEffect, useState,useRef } from "react";
import { UserContext } from "../providers/UserProvider";

export const Logout = (props) =>{
    const navigate = useNavigate()
    const { logout } = useContext(UserContext);
    const handleLogout = (e) => {
        e.preventDefault()

                logout();
                window.location.reload(false);
                navigate("/");
                window.location.reload(false); 
        }

    return (
        <>
        <button id="logout-button" className="btn-success" onClick={handleLogout}>Log Out</button>
        </>
    )
}