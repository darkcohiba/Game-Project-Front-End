import styled from "styled-components";
import { useEffect, useState } from "react"

const BIRD_SIZE = 20;
const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;
const GRAVITY = 6;
const JUMP_HEIGHT = 100;
const OBSTACLE_WIDTH = 40;
const OBSTACLE_GAP = 200;

function FlappyBird() {
    
    const [birdPosition, setBirdPosition] = useState(200);
    const [gameHasStarted, setGameHasStarted] = useState(false);
    const [obstacleHeight, setObstacleHeight] = useState(100);
    const [obstacleLeft, setObstacleLeft] = useState(GAME_WIDTH - OBSTACLE_WIDTH);
    const [score, setScore] = useState(-2);

    const bottomObstacleHeight = GAME_HEIGHT - OBSTACLE_GAP - obstacleHeight

    useEffect(() => {
        let timeId;
        if (gameHasStarted && birdPosition < GAME_HEIGHT - BIRD_SIZE) {
            timeId = setInterval(() => {
                setBirdPosition(birdPosition => birdPosition + GRAVITY)
            }, 24)
        }

        return () => {
            clearInterval(timeId);
        };
    }, [birdPosition, gameHasStarted]);
    
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

    useEffect(() => {
        const hasCollidedWithTopObstacle = 
            birdPosition >= 0 && birdPosition < obstacleHeight;
        const hasCollidedWithBottomObstacle = 
            birdPosition <= 500 && birdPosition > 500 - bottomObstacleHeight;

        if (obstacleLeft >= 0 && 
            obstacleLeft <= OBSTACLE_WIDTH && 
            (hasCollidedWithTopObstacle || hasCollidedWithBottomObstacle)
            ) {
                setGameHasStarted(false)
                alert(`Thank you for playing, your score is ${score}!`)
                setScore(-2);
            }
    }, [birdPosition, obstacleHeight, bottomObstacleHeight, obstacleLeft]);


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


    return (
        <Div >
            <GameBox tabIndex="0" height={GAME_HEIGHT} width={GAME_WIDTH} onClick={handleClick} onKeyDown={handleClick}>
                <Obstacle
                    top={0}
                    width={OBSTACLE_WIDTH}
                    height={obstacleHeight}
                    left={obstacleLeft}
                    />
                <Obstacle
                    top={GAME_HEIGHT - (obstacleHeight + bottomObstacleHeight)}
                    width={OBSTACLE_WIDTH}
                    height={bottomObstacleHeight}
                    left={obstacleLeft}
                    />
                <Bird size={BIRD_SIZE} top={birdPosition}/>
                <span> {score} </span>
            </GameBox>
        </Div>
    );
}

export default FlappyBird

const Bird = styled.div`
    position: absolute;
    background-color: red;
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    top: ${(props) => props.top}px;
    border-radius: 50%;
`;

const Div = styled.div`
display: flex:
width: 100%;
justify-content: center;
& span{
    color: white;
    font-size: 32px;
    font-weight: bold;
    position: absolute;
};
`;

const GameBox = styled.div`
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    background-color: blue;
    overflow: hidden;
`;

const Obstacle = styled.div`
    position: relative;
    top: ${(props) => props.top}px;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    left: ${(props) => props.left}px;
    background-color: green;
`;