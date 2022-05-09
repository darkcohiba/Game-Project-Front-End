import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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



  return (
    <div>
      <Router>
      <Routes>
      <Route path= "/"  element = {<Login setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>} />
      <Route path= "/CreateAUser"  element = {<Auth setIsAuthenticated={setIsAuthenticated} setUser={setUser} setErrors={setErrors}/>} />
      <Route path= "/Home"  element = {<HomePage/>} />
      <Route path="/Snake" element = {<SnakeGame/>}/>
      {/* <Route path="/DoodleJump" element = {<Submission/>}/> */}
      <Route path="/FlappyBird" element = {<FlappyBird/>}/>
      <Route path="/Rules" element = {<Rules/>}/>
      </Routes>
      </Router>
    </div>
  )
    
}

export default App;