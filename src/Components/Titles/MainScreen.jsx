import "../../Styles/MainScreen.css"
import About from "./About"
import { useEffect, useState } from "react"


export default function MainScreen () {

    const [showAbout, setShowAbout] = useState("none")

    const aboutShowHandler = (open,close) => {
        if (open) setShowAbout("about_display")
        if (close) setShowAbout("none")
    }

    return (
        <>
            <button className="main_buttons">Play</button>
            <button className="main_buttons" onClick={() => aboutShowHandler(true)}>About</button>
            <div  className={showAbout}>
                <About aboutShowHandler={aboutShowHandler}></About>
            </div>
            
            <h3>High Score: 0</h3>
        </>
    )
}