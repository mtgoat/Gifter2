import React, { useEffect, useContext, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { PostContext } from "../providers/PostProvider";
import { UserProfileContext } from "../providers/UserProfileProvider";
import { useParams } from "react-router-dom";
import Post from "./Post";


const UserPosts = () => {

    // const [posts, setPost] = useState();
    // const { getPost } = useContext(PostContext);
    const {  usersPosts, getUserByIdWithPosts } = useContext(UserProfileContext);

    const { id } = useParams();

    
    useEffect(() => {
        getUserByIdWithPosts(id);
    }, []);
  
    if (!usersPosts) {
      return null;
    }

    
    return (
        <div className="container">
      
        <div className="row justify-content-center">
          <div className="cards-column">
            {usersPosts.map((singlePostInLoop) => (
              <Post key={singlePostInLoop.id} postProp={singlePostInLoop} />
            ))}
          </div>
        </div>
      </div>
      );
}
export default UserPosts;