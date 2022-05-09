import Header from './Header';
import React, {useState, useEffect} from 'react';


export default function Highscores() {
    const [flappyHighscores, setFlappyhighscores] = useState([])
    const [snakeHighscores, setSnakehighscores] = useState([]) 

    useEffect(()=> {
        fetch(`http://localhost:3000/topflap`)
            .then((resp) => resp.json())
            .then((data) => console.log(data))
        fetch(`http://localhost:3000/topsnake`)
            .then((resp) => resp.json())
            .then((data) => console.log(data))
    },[])

    return(
        <>
            <Header/>

        </>
    )
}