import { useEffect, useState } from "react";
import Login from "./Login"
import { useNavigate } from "react-router"
import Header from './Header';
import FlappyBirdSample from './assets/flappy-bird-sample.png'
import SnakeGameSample from './assets/snake-game-sample.png'

export default function Homepage({ isAuthenticated,setUser,setIsAuthenticated, user}) {
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/CreateAUser')
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
    
    //   if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />

    return(
        <>
            <Header />
            <div className="grid grid-cols-2 grid-rows-2 gap-4 text-center">
                <div>
                    <br/>
                    <img onClick={() => navigate('/snake')} className="inline" src={SnakeGameSample} id="snake-game-bg" alt='Snake Game'/>
                </div>
                <div>
                    <br/>
                    <img onClick={() => navigate('/flappybird')} className="inline" id="flappy-bird-sample-bg" src={FlappyBirdSample} alt='Flappy Bird Game'/>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Snake Instructions</h1>
                    <br/>
                    <h2 className='text-xl font-semibold'>Objective</h2>
                    <p>Collect as many apples without running into the wall or yourself.</p>
                    <br/>
                    <h2 className='text-xl font-semibold'>Controls</h2>
                    <p>W - Up</p>
                    <p>S - Down</p>
                    <p>A - Left</p>
                    <p>D - Right</p>
                    
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Flappy Bird Instructions</h1>
                    <br/>
                    <h2 className='text-xl font-semibold'>Objective</h2>
                    <p>Your bird will drop automaticly, fly as long as you can while avoiding obstacles!</p>
                    <br/>
                    <h2 className='text-xl font-semibold'>Controls</h2>
                    <p>Space/Left Click - Fly up</p>
                </div>
            </div>
        </>
    )
}