import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth from './Auth';
import HomePage from './Homepage';
import Rules from './Rules';
import Login from './Login';
import SnakeGame from './views/SnakeGame';
import FlappyBird from './views/FlappyBird';


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState(false)
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/authorized_user')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
    });
  },[]);

  if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;


  return (
    <div>
      <Router>
      <Route path= "/"  element = {<Login setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>} />
      <Route path= "/CreateAUser"  element = {<Auth setIsAuthenticated={setIsAuthenticated} setUser={setUser} setErrors={setErrors}/>} />
      <Route path= "/home"  element = {<HomePage/>} />
      <Route path="/Snake" element = {<SnakeGame/>}/>
      {/* <Route path="/DoodleJump" element = {<Submission/>}/> */}
      <Route path="/FlappyBird" element = {<FlappyBird/>}/>
      <Route path="/rules" element = {<Rules/>}/>
      </Router>
    </div>
  )
    
}

export default App;