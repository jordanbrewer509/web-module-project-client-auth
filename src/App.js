import React from 'react';
import './App.css';
import { Route, Routes, Link, Redirect, useNavigate } from 'react-router-dom';

const Login = () => {
  return (<h2>Login</h2>)
}

const FriendList = () => {
  return (<h2>Login</h2>)
}

const AddFriend = () => {
  return (<h2>Login</h2>)
}

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" 
          element={<Login />}>
        </Route>
        <Route path="/login"
        element={<Login />}> 
          {navigate("/")}
        </Route>
        <Route path="/friends" 
          element={<FriendList />}>
        </Route>
        <Route path="/friends/add" 
          element={<AddFriend />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
