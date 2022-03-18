import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";

//When the component loads, it will call the getAllPosts method it recieves from the provider and render a list of posts.
const PostList = () => {
  const { posts, getAllPosts, searchPost } = useContext(PostContext);

  

  useEffect(() => {
    getAllPosts();
  }, []);

 

  return (
    <div className="container">
      
    <div className="row justify-content-center">
      <div className="cards-column">
        {posts.map((singlePostInLoop) =>{
          return (   
          <Post key={singlePostInLoop.id} postProp={singlePostInLoop} />
        )})}
      </div>
    </div>
  </div>
  );
};

export default PostList;