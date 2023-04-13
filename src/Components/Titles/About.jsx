import "../../Styles/MainScreen.css"

export default function About ({aboutShowHandler}) {



    return (
        <>
            <h3 onClick={() => aboutShowHandler(false,true)} className="about_button">X</h3>
            <p>Hello everyone, today I want to introduce you to a fun web game called RGB Guesser. This game challenges you to guess the RGB or Hex code of a color that appears on your screen. One of the great features of RGB Guesser is its sleek and intuitive design. The game's interface is easy to navigate, allowing you to focus on the challenge at hand. The color palette used in the game is also well-designed, ensuring that the colors are displayed in a way that is both visually appealing and easy to distinguish.The game was developed by Liam Marlon Perez Lupia, using mainly Javascript and React.</p>
        </>
    )
}