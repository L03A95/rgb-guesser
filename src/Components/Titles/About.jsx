import "../../Styles/MainScreen.css"

export default function About ({aboutShowHandler}) {



    return (
        <>
            <h5 onClick={() => aboutShowHandler(false,true)} className="about_button">X</h5>
            <p>Hello everyone, today I want to introduce you to a fun web game called RGB Guesser. This game challenges you to guess the RGB or Hex code of a color that appears on your screen. One of the great features of RGB Guesser is its sleek and intuitive design. The game's interface is easy to navigate, allowing you to focus on the challenge at hand. The game was developed by Liam Marlon Perez Lupia, using mainly Javascript and React.</p>
        </>
    )
}