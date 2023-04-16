import { useState } from "react"
import "../Styles/Game.css"


export default function GameDisplay ({gameShowHandler}) {
    const [score, setScore] = useState(0)


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

      function options(color) {
        let resul = []
        let num = Math.floor(Math.random() * 6);

        for (let i = 0; i < 6; i++) {
          let random = getRandomColor()
          i === num ? resul.push(<h5 style={{height:"40px",width:"230px",margin:"80px"}}>{color.rgb}  {color.hex}</h5>) : resul.push(<h5 style={{height:"40px",width:"230px",margin:"80px"}}>{random.rgb}  {random.hex}</h5>)
        }
        return resul
      }

      function game () {
        let colorCorrecto = getRandomColor()

        let styleColor = {
          height: "150px",
          width: "1400px",
          marginLeft:"65px",
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
            <strong onClick={() => gameShowHandler(false,true)}>Main menu</strong>
            <strong>Score: {score}</strong>
            {game()}
        </>
    )
}