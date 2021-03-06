import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

export const UserContext = React.createContext();
//
export const UserProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
//limiting the user what to see

  const getCurrentUser = () => {
    const currentUser = localStorage.getItem("gifterUser");

    return currentUser;
  };

  const navigate = useNavigate()

  const login = (userObject) => {
    debugger;
    fetch(`api/userprofile/getbyemail?email=${userObject.email}`)
      .then((r) => r.json())
      .then((userObjFromDB) => { localStorage.setItem("gifterUser", JSON.stringify(userObjFromDB));
        debugger
        if (!userObjFromDB.status){
        debugger   
        setIsLoggedIn(true);
        
        } else{
          debugger
        setIsLoggedIn(false);
        ;
      }})
  };

  const register = (userObject) => {
    fetch("/api/userprofile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObject),
    })
      .then((response) => response.json())
      .then((userObject) => {
        localStorage.setItem("gifterUser", JSON.stringify(userObject));
        setIsLoggedIn(true);});
  };

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider
      value={{isLoggedIn, getCurrentUser, login, register, logout }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
