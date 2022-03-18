import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);
  
  const getAllPosts = () => {
    return fetch("https://localhost:44312/api/post")
      .then((res) => res.json())
      .then(setPosts);
  };

  const getPost = (id) => {
    return fetch(`https://localhost:44312/api/post/${id}`)
    .then((res) => res.json());
};

const getPostByUserId = (id) => {
  return fetch(`https://localhost:44312/api/post/user/${id}`)
  .then((res) => res.json());
};

  const searchPost = (quary) => {
    return fetch(`https://localhost:44312/api/post/search?q=${quary}`)
    .then((res) => res.json())
    .then(setPosts);
  };

  const addPost = (post) => {
    return fetch("https://localhost:44312/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then(getAllPosts);
  };

const updatePost = postObj => {
    return fetch(`https://localhost:44312/api/post/${postObj.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postObj)
    })
      .then(getAllPosts)
  }

  return (
    <PostContext.Provider value={{ posts, getAllPosts, addPost, getPost, updatePost, searchPost, getPostByUserId}}>
      {props.children}
    </PostContext.Provider>
  );
};