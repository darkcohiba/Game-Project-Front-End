import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from './Auth';
import HomePage from './Homepage';
import Login from './Login';
import Highscore from './Highscores';
import Header from './Header';
import SnakeGame from './views/SnakeGame';
import FlappyBird from './views/FlappyBird';
import UserProfile from './UserProfile';


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState(false)
  const [user, setUser] = useState(null);

  return (
    <div>
      <Router>
        <Routes>
          <Route path= "/"  element = {<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>} />
          <Route path= "/CreateAUser"  element = {<Auth isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} setErrors={setErrors}/>} />
          <Route path= "/Home"  element = {<HomePage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>}/>
          <Route path="/Snake" element = {<SnakeGame/>}/>
          <Route path="/FlappyBird" element = {<FlappyBird/>}/>
          <Route path="/Highscores" element = {<Highscore/>}/>
          <Route path="/Header" element = {<Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>}/>
          <Route path="/Profile" element = {<UserProfile isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>}/>
        </Routes>
      </Router>
    </div>
  )
    
}

export default App;