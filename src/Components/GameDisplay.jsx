import { useState } from "react"
import "../Styles/Game.css"


export default function GameDisplay ({gameShowHandler}) {
    const [score, setScore] = useState(0)
    const [lose, setLose] = useState(false)

    function getRandomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
      
        var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
        var hex = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      
        return { rgb: rgb, hex: hex };
      }
      
      function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }

      function closeLose () {
        let localScore = localStorage.getItem("Score") 
        
        if(score > localScore)localStorage.setItem("Score",score)
       
        setScore(0)
        setLose(false)
      }

      function options(color) {
        let resul = []
        let num = Math.floor(Math.random() * 6);

        for (let i = 0; i < 6; i++) {
          let random = getRandomColor()
          i === num ? resul.push(<h5 style={{height:"75px",width:"230px",margin:"80px",cursor: "pointer",backgroundColor: "#312333",padding:"5px",borderRadius:"10px"}} onClick={() => setScore(score + 1)}>{color.rgb}  {color.hex}</h5>) : resul.push(<h5 style={{height:"75px",width:"230px",margin:"80px",cursor: "pointer",backgroundColor: "#312333",padding:"5px",borderRadius:"10px"}} onClick={() => setLose(true)}>{random.rgb}  {random.hex}</h5>)
        }
        return resul
      }

      function game () {
        let colorCorrecto = getRandomColor()

        let styleColor = {
          height: "150px",
          width: "73vw",
          marginLeft:"3vw",
          backgroundColor: colorCorrecto.rgb
        }

        return (
          <div>
            <div style={styleColor}></div>
            <div className="option-container">
              {options(colorCorrecto).map((e) => e)}
            </div>
          </div>
        )
      }


    return(
        <>
            <div className="game_nav">
              <strong onClick={() => gameShowHandler(false,true)} className="menu_btn">Main menu</strong>
              <strong>Score: {score}</strong>
            </div>
            
            {game()}
            <div className={lose ? "lose_screen" : "hidden"}>
              <p onClick={() => closeLose()} className="play_again_btn">Play again</p>
              <br></br>
              <h1>You lose, your score was: {score}</h1>
            </div>
        </>
    )
}