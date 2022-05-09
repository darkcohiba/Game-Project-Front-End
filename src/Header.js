export default function Header() {
    return (
        <div className="flex h-14 bg-pink-500 justify-around items-center">
            <button className="rounded-full bg-pink-100 hover:bg-pink-300 w-20 h-6 " href="./home"> Home </button>
            <button className="rounded-full bg-pink-100 hover:bg-pink-300 w-28 h-6 " href="./high_scores">High Scores</button>
            <button className="rounded-full bg-pink-100 hover:bg-pink-300 w-28 h-6 " href="./login">Login/Logout</button>
        </div>
    )
}