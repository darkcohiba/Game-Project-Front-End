import styled from "styled-components";
import { useEffect, useState } from "react"
import Header from "../Header.js"

const BOTTOM_HEIGHT = 150;
const BIRD_HEIGHT = 45;
const BIRD_WIDTH = 60;
const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;
const GRAVITY = 6;
const JUMP_HEIGHT = 100;
const OBSTACLE_WIDTH = 62;
const OBSTACLE_GAP = 200;

function FlappyBird(user) {
    
    const [birdPosition, setBirdPosition] = useState(200);
    const [gameHasStarted, setGameHasStarted] = useState(false);
    const [obstacleHeight, setObstacleHeight] = useState(100);
    const [obstacleLeft, setObstacleLeft] = useState(GAME_WIDTH - OBSTACLE_WIDTH);
    const [score, setScore] = useState(-2);
    const [gameData, setGameData] = useState([])

    const bottomObstacleHeight = GAME_HEIGHT - OBSTACLE_GAP - obstacleHeight

    useEffect(() => {
        let timeId;
        if (gameHasStarted && birdPosition < GAME_HEIGHT - BIRD_HEIGHT) {
            timeId = setInterval(() => {
                setBirdPosition(birdPosition => birdPosition + GRAVITY)
            }, 24)
        }

        return () => {
            clearInterval(timeId);
        };
    }, [birdPosition, gameHasStarted]);
    

    //Render Obstacle
    useEffect(() => {
        let obstacleId;
        if(gameHasStarted && obstacleLeft >= -OBSTACLE_WIDTH) {
            obstacleId = setInterval(() => {
                setObstacleLeft((obstacleLeft) => obstacleLeft - 7)
            }, 24);

            return () => {
                clearInterval(obstacleId);
            };
        }else{
            setScore((score) => score + 1)
            setObstacleLeft(GAME_WIDTH - OBSTACLE_WIDTH);
            setObstacleHeight(
                Math.floor(Math.random() * (GAME_HEIGHT - OBSTACLE_GAP))
            );
            
        }
    }, [gameHasStarted, obstacleLeft]);


    //Create Hit-Detection
    useEffect(() => {
        const hasCollidedWithTopObstacle = 
            birdPosition >= 1 && birdPosition < obstacleHeight;
        const hasCollidedWithBottomObstacle = 
            birdPosition <= GAME_HEIGHT && birdPosition > GAME_HEIGHT - bottomObstacleHeight;
        const hasCollidedWithBottom = 
            birdPosition > GAME_HEIGHT - BIRD_HEIGHT;

        if (hasCollidedWithBottom || obstacleLeft >= 0 && 
            obstacleLeft <= OBSTACLE_WIDTH && 
            (hasCollidedWithTopObstacle || hasCollidedWithBottomObstacle)
            ) {
                const game = {
                    game: "Flappy Bird",
                    score
                }
                fetch(`http://localhost:3000//games`,{
                    method:'POST',
                    headers:{'Content-Type': 'application/json'},
                    body:JSON.stringify(game)})
                    .then(response => response.json())
                    .then((data) => console.log(data))
                setGameHasStarted(false)
                setBirdPosition(200)
                alert(`Thank you for playing, your score is ${score}!`)
                setScore(-2);
            }
    }, [obstacleHeight, bottomObstacleHeight, obstacleLeft]);

    //Create Bird Jumping Action
    const handleClick = () => {
        let newBirdPosition = birdPosition - JUMP_HEIGHT;
        if (!gameHasStarted) {
            setGameHasStarted(true);
        }else if (newBirdPosition < 0) {
            setBirdPosition(0);
        } else {
            setBirdPosition(newBirdPosition);
        }    
    };

    //Render Game
    return (
        <>
        <Header/>
        <Div>
            <GameBox tabIndex="0" id="game-box" height={GAME_HEIGHT} width={GAME_WIDTH} onClick={handleClick} onKeyDown={handleClick}>
                <Obstacle
                    id="obstacle-up"
                    top={0}
                    width={OBSTACLE_WIDTH}
                    height={obstacleHeight}
                    left={obstacleLeft}
                    />
                <Obstacle
                    id="obstacle"
                    top={GAME_HEIGHT - (obstacleHeight + bottomObstacleHeight)}
                    width={OBSTACLE_WIDTH}
                    height={bottomObstacleHeight}
                    left={obstacleLeft}
                    />
                <Bird id="bird-image" height={BIRD_HEIGHT} width={BIRD_WIDTH} top={birdPosition}/>
                
            </GameBox>
            <BottomBox
                width={GAME_WIDTH}
                height={BOTTOM_HEIGHT}
                id="bottom-box">
                <p id="flappy-bird-score">
                    {score}
                </p>
            </BottomBox>
        </Div>
        </>
    );
}

export default FlappyBird

//Style Game
const Div = styled.div`
    height: ${(props) => props.height}px;
    display: flex;
    width: 100%;
    justify-content: center;
    position: relative;
    top: 10px;
`;

const Bird = styled.div`
    position: absolute;
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    top: ${(props) => props.top}px;
    radius: 10%
`;

const GameBox = styled.div`
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    overflow: hidden;
    // border: 1px solid black
`;

const Obstacle = styled.div`
    position: relative;
    top: ${(props) => props.top}px;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    left: ${(props) => props.left}px;
`;

const BottomBox = styled.div`
    position: absolute;
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    // border: 1px solid black;
    top: 500px;
`;