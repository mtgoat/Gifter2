import React, { useState } from "react";

export const UserProfileContext = React.createContext();

export const UserProfileProvider = (props) => {
    const [usersPosts, setUsersPosts] = useState([]);

    const getUserByIdWithPosts = (id) => {
        return fetch(`https://localhost:44312/api/UserProfile/user/${id}`)
        .then((res) => res.json())
        .then(setUsersPosts);
    };

    return (
        <UserProfileContext.Provider value={{
           usersPosts, getUserByIdWithPosts
         }}>
          {props.children}
        </UserProfileContext.Provider>
      );
}
