import React, { useContext, useEffect, useState } from "react";
import {Form,FormGroup,Card,CardBody,Label,Input,Button } from "reactstrap";
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";
import { useNavigate } from "react-router-dom";

//1. to print an empty form
    //2. as the user type, we need to update the state
//3. the user clicks the save, we send the state info to the database
export const PostForm = () => {
    const { addPost} = useContext(PostContext);
    const [userProfileId, setUserProfileId] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [title, setTitle] = useState("");
    const [caption, setCaption] = useState("");
  
  // To get access to the navigate instance, we need to use the useNavigate hook
  const navigate = useNavigate();

    const submit = (e) => {
        const post = {
          imageUrl,
          title,
          caption,
          userProfileId: +userProfileId,
        };
 // This code says to send the user back to the home (or /) route after the post has been successfully added.
        addPost(post).then((p) => {
            
            navigate("/");
          });
        };
   
     
 return (
    <div className="container pt-4">
    <div className="row justify-content-center">
      <Card className="col-sm-12 col-lg-6">
        <CardBody>
          <Form>
            <FormGroup>
              <Label for="userId">User Id (For Now...)</Label>
              <Input
                id="userId"
                onChange={(e) => setUserProfileId(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="imageUrl">Gif URL</Label>
              <Input
                id="imageUrl"
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input id="title" onChange={(e) => setTitle(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="caption">Caption</Label>
              <Input
                id="caption"
                onChange={(e) => setCaption(e.target.value)}
              />
            </FormGroup>
          </Form>
          <Button color="info" onClick={submit}>
            SUBMIT
          </Button>
        </CardBody>
      </Card>
    </div>
  </div>
      );
  };
export default PostForm;
