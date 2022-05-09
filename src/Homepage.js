import Header from './Header';


export default function Homepage() {
    return(
        <>
            <Header/>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <div id="snake-game-bg">
                    <img src='*' alt='Snake Game' />
                </div>
                <div>
                    <img src="./assets/flappy-bird-sample.png" alt='Flappy Bird Game' />
                </div>
                <div className='text-center'>
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
                <div className='text-center'>
                    <h1 className='text-2xl font-bold'>Flappy Bird Instructions</h1>
                    <br/>
                    <h2 className='text-xl font-semibold'>Objective</h2>
                    <p>Your bird will drop automaticly, fly as long as you can while avoiding obstacles!</p>
                    <br/>
                    <h2 className='text-xl font-semibold'>Controls</h2>
                    <p>Space/Left Click - Fly up</p>
                </div>
                hope this works
            </div>
        </>
    )
}