import Header from './Header';

export default function Homepage() {
    return(
        <>
            <Header/>
            <div className="flex">
                <div id="snake-game-bg">
                    <p>div</p>

                </div>
                <div id="flappy-bird-game-bg">
                    <p>div</p>

                </div>
                <div>
                    <h1>Snake Instructions</h1>
                    <h2>Controls</h2>
                    <p>W - Up</p>
                    <p>S - Down</p>
                    <p>A - Left</p>
                    <p>D - Right</p>
                    <p>Collect as many apples without running into the wall or yourself.</p>
                </div>
                <div>
                    <h1>Flappy Bird Instructions</h1>
                    <h2>Controls</h2>
                    <p>Space/Left Click - Fly up</p>
                    <p>Your bird will drop automaticly, fly as long as you can while avoiding obstacles!</p>
                </div>
            </div>
        </>
    )
}