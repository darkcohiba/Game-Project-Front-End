import Header from './Header';
import React, {useState, useEffect} from 'react';


export default function Highscores() {
    const [highscores, setHighscores] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:9292/top`)
            .then((resp) => resp.json())
            .then((data) => setHighscores(data))
    },[])
    return(
        <>
            <Header/>

        </>
    )
}