import Header from './Header';
import React, {useState, useEffect} from 'react';


export default function Highscores() {
    // const [flappyHighscores, setFlappyhighscores] = useState([])
    // const [snakeHighscores, setSnakehighscores] = useState([]) 

    useEffect(()=> {
        fetch(`http://localhost:3000/topflap`)
            .then((resp) => resp.json())
            .then((flappydata) => (flappydata))
        fetch(`http://localhost:3000/topsnake`)
            .then((resp) => resp.json())
            .then((snakedata) => (snakedata))
    },[])

    // const snakeHighscores = snakedata
    // const flappyBirdHighscores = flappydata

    return(
        <>
            <Header/>
            <div className='col-span-2 flex justify-evenly font-semibold text-center'>
                <div className='text-xl'>
                    Flappy Bird High Scores
                    <div className='col-span-2 flex justify-evenly text-lg font-normal'>
                        {/* <ul>
                            {snakeHighscores.map() =>
                        <li></li>}
                        </ul> */}
                    </div>
                </div>
                <div className='text-xl'>
                    Snake High Scores
                    <div className='col-span-2 flex justify-evenly text-lg font-normal'>
                        <p>User
                        <ul>
                            <li> 1 </li>
                            <li> 2 </li>
                            <li> 3 </li>
                            {/* <li>`${i}. ${user}: ${score}`</li> */}
                        </ul>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}