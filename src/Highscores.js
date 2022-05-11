import Header from './Header';
import React, {useState, useEffect} from 'react';


export default function Highscores({isAuthenticated,setUser,setIsAuthenticated}) {
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
            <Header />
            <div className='col-span-2 flex justify-evenly font-semibold text-center'>
                <div className='text-xl'>
                    Flappy Bird High Scores
                    <div className='col-span-2 flex justify-evenly text-lg font-normal'>
                        <ol>
                        {flappyHighscores.map(item => 
                        <li>{`${item.score} by ${item.user.username}`}</li>)}
                        </ol>
                    </div>
                </div>
                <div className='text-xl'>
                    Snake High Scores
                    <div className='col-span-2 flex justify-evenly text-lg font-normal'>
                        <ol>
                        {snakeHighScores.map(item => 
                        <li>{`${item.score} by ${item.user.username}`}</li>)}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}