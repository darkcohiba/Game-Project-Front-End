import Header from './Header';
import React, {useState, useEffect} from 'react';


export default function Highscores({user, isAuthenticated,setUser,setIsAuthenticated}) {
    const [flappyHighscores, setFlappyHighScores] = useState([])
    const [snakeHighScores, setSnakeHighScores] = useState([]) 

    useEffect(()=> {
        fetch(`http://localhost:3000/topflap`)
            .then((resp) => resp.json())
            .then((data) => setFlappyHighScores(data))
        fetch(`http://localhost:3000/topsnake`)
            .then((resp) => resp.json())
            .then((data) => setSnakeHighScores(data))
        },[])


    return(
        <>
            <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>
            <div className='col-span-2 flex justify-evenly font-semibold text-center'>
                <div className='text-3xl text-pink-800 underline'>
                    Flappy Bird High Scores
                    <div className='col-span-2 flex justify-evenly text-lg font-normal'>
                        <ol>
                        {flappyHighscores.map(item => 
                        <li key={item.id} className= "rounded-md ring-2 ring-pink-400 w-45 p-4 m-2 bg-pink-100 animate-pulse">{`${item.score} by ${item.user.username}`}</li>)}
                        </ol>
                    </div>
                </div>
                {/* <div className='text-xl'>
                    Snake High Scores
                    <div className='col-span-2 flex justify-evenly text-lg font-normal'>
                        <ol>
                        {snakeHighScores.map(item => 
                        <li>{`${item.score} by ${item.user.username}`}</li>)}
                        </ol>
                    </div>
                </div> */}
            </div>
        </>
    )
}