import "../../Styles/MainScreen.css"
import GameDisplay from "../GameDisplay"
import About from "./About"
import { useEffect, useState } from "react"


export default function MainScreen () {

    const [showAbout, setShowAbout] = useState("none")
    const [showGame, setShowGame] = useState("none")

    const aboutShowHandler = (open,close) => {
        if (open) setShowAbout("about_display")
        if (close) setShowAbout("none")
    }

    const gameShowHandler = (open,close) => {
        if (open) setShowGame("game_display")
        if (close) setShowGame("none")
    }


    return (
        <>
            <button className="main_buttons" onClick={() => gameShowHandler(true)}>Play</button>
            <button className="main_buttons" onClick={() => aboutShowHandler(true)}>About</button>
            <div  className={showAbout}>
                <About aboutShowHandler={aboutShowHandler}/>
            </div>
            <div className={showGame}>
                <GameDisplay gameShowHandler={gameShowHandler}/>
            </div>
            
            <h3>High Score: {localStorage.getItem("Score") ? localStorage.getItem("Score") : 0}</h3>
        </>
    )
}

