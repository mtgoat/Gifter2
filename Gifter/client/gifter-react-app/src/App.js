import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import ApplicationViews from "./components/ApplicationViews";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import SearchBar2 from "./components/SearchBar2"
import { SearchBar } from "./components/SearchBar";
import Header from "./components/Header";
import { Login } from "./components/Login";
import { UserProvider } from "./providers/UserProvider";
import {Register} from "./components/Register"
function App() {
  const [loggedin, setLoggedin] = useState(false);
  const changeState = (bool) => setLoggedin(bool);

  if (localStorage.getItem("gifterUser")){
    return (
    <div className="App">
    {/* <PostProvider> */}
      <Header/>
      <ApplicationViews />
    {/* </PostProvider> */}
    
  </div>
    )
  }else 
{
return (
  <UserProvider>
    <Routes>
 
  <Route path="/" element={<Navigate to="login" />} />
  <Route path="/login" element={<Login setLoggedin={changeState} />} />
  <Route path="/register" element={<Register setLoggedin={changeState} />} />
  </Routes>
  </UserProvider>
  );
}


  
}

export default App;