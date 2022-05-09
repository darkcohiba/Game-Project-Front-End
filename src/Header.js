import { useNavigate } from "react-router"

export default function Header() {

    const navigate = useNavigate();

    return (
        <div className="flex h-14 bg-pink-500 justify-around items-center">
            <button 
                className="rounded-full bg-pink-100 hover:bg-pink-300 w-20 h-6 " 
                onClick={() => navigate("/home")}>
                Home
            </button>
            <button
                className="rounded-full bg-pink-100 hover:bg-pink-300 w-28 h-6 " 
                onClick={() => navigate("/highscores")}>
                High Scores
            </button>
            <button 
                className="rounded-full bg-pink-100 hover:bg-pink-300 w-28 h-6 " 
                onClick={() => navigate("/")}>
                Logout
            </button>
        </div>
    )
}