import React, { useContext} from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";
import PostDetails from "./PostDetails";
import UserPosts from "./UserPosts";
import {  UserProfileProvider } from "../providers/UserProfileProvider";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { UserContext } from "../providers/UserProvider";
import { Register } from "./Register";

const ApplicationViews = () => {
  
  const {isLoggedIn } = useContext(UserContext);

    if (!isLoggedIn){

  return (

        <Routes>

            <Route path ="login" element={<Login/>}/>
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />}/>
            {/* anyother route goes to login */}

        </Routes>
      
  );
  } else {
    return (
        <Routes>
          <Route path="/"  element={<PostList />}/>
          <Route path="posts/add"  element={<PostForm />}/>
          <Route path="posts/:id"  element={<PostDetails />}/>
          <Route path="users/:id" element={<UserProfileProvider><UserPosts /></UserProfileProvider>}/>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path ="logout" element={<Logout/>}/>
        </Routes>
    )
  }

};
export default ApplicationViews;

//Note on "exact": Technically "/" will match every single route in our application since they all start like that. The exact attribute specifies that we only want to render this component then the url is exactly /

//Note on "route params": URLs often have route params in them. The third route here is an example of a path with a route param: /posts/:id. Using the colon, we can tell the react router that this will be some id parameter.