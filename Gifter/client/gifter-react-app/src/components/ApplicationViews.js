import React, { useEffect, useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";
import { PostProvider } from "../providers/PostProvider";
import PostDetails from "./PostDetails";
import UserPosts from "./UserPosts";
import { UserProfileProvider } from "../providers/UserProfileProvider";
import { UserProvider } from "../providers/UserProvider";
import { Login } from "./Login";
import { Logout } from "./Logout";

const ApplicationViews = () => {


  return (
      <PostProvider>
        <UserProvider>
        <Routes>
                <Route path="/home"  element={<PostList />}/>
                <Route path="/"  element={<PostList />}/>
                <Route path="/posts/add"  element={<PostForm />}/>
                <Route path="/posts/:id"  element={<PostDetails />}/>
                <Route path="/users/:id" element={<UserProfileProvider><UserPosts /></UserProfileProvider>} />
                {/* <Route path ="login" element={<Login/>}/> */}
                <Route path ="logout" element={<Logout/>}/>

        </Routes>
        </UserProvider>
      </PostProvider>
  );
};
export default ApplicationViews;

//Note on "exact": Technically "/" will match every single route in our application since they all start like that. The exact attribute specifies that we only want to render this component then the url is exactly /

//Note on "route params": URLs often have route params in them. The third route here is an example of a path with a route param: /posts/:id. Using the colon, we can tell the react router that this will be some id parameter.