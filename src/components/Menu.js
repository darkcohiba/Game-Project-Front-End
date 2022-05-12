import "./Menu.css"

export default function Menu({ onClick }) {
    return (
        <div className="menu">
            <button className="menu-button" onClick={onClick}>
                Play Tetris
            </button>
        </div>
    )
}