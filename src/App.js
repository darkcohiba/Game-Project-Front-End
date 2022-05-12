import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from './Auth';
import HomePage from './Homepage';
import Login from './Login';
import Highscore from './Highscores';
import SnakeGame from './views/SnakeGame';
import FlappyBird from './views/FlappyBird';
import UserProfile from './UserProfile';
import Protected from './Protected';
// import Tetris from './views/TetrisGame';


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [errors, setErrors] = useState(false)
  const [user, setUser] = useState(null)
  console.log(`is user auth ${isAuthenticated}`)
  console.log(`is user ${user}`)

  return (
    <div>
      <Router>
        <Routes>
          <Route path= "/"  element = {<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>} />
          <Route path= "/CreateAUser"  element = {<Auth isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} setErrors={setErrors}/>} />
          <Route path= "/Home"  element = {<Protected isAuthenticated={isAuthenticated}><HomePage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/></Protected>}/>
          <Route path="/Profile" element = {<Protected isAuthenticated={isAuthenticated}><UserProfile isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/></Protected>}/>
          <Route path="/Snake" element = {<Protected isAuthenticated={isAuthenticated}><SnakeGame isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/></Protected>}/>
          <Route path="/FlappyBird" element = {<Protected isAuthenticated={isAuthenticated}><FlappyBird isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/></Protected>}/>
          <Route path="/Highscores" element = {<Highscore isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>}/>
        </Routes>
      </Router>
      {/* <Tetris/> */}
    </div>
  )
    
}

export default App;