import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from './Auth';
import HomePage from './Homepage';
import Login from './Login';
import Highscore from './Highscores';
import Header from './Header';
import SnakeGame from './views/SnakeGame';
import FlappyBird from './views/FlappyBird';


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState(false)
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetch('/CreateAUser')
  //   .then((res) => {
  //     if (res.ok) {
  //       res.json()
  //       .then((user) => {
  //         setIsAuthenticated(true);
  //         setUser(user);
  //       });
  //     }
  //   });

  // },[]);

  // if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />

  return (
    <div>
      <Router>
        <Routes>
          <Route path= "/"  element = {<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>} />
          <Route path= "/CreateAUser"  element = {<Auth isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} setErrors={setErrors}/>} />
          <Route path= "/Home"  element = {<HomePage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>}/>
          <Route path="/Snake" element = {<SnakeGame isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>}/>
          <Route path="/FlappyBird" element = {<FlappyBird isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>}/>
          <Route path="/Highscores" element = {<Highscore isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>}/>
          <Route path="/Header" element = {<Header />}/>
        </Routes>
      </Router>
    </div>
  )
    
}

export default App;