import { useState } from "react"


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

    return(
        <>
            <strong onClick={() => gameShowHandler(false,true)}>Main menu          </strong>
            <strong>Score: {score}</strong>
        </>
    )
}