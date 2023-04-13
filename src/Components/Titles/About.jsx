import "../../Styles/MainScreen.css"

export default function About ({aboutShowHandler}) {



    return (
        <div>
            <h3 onClick={() => aboutShowHandler(false,true)}>X</h3>
            <p>Hola este es el about</p>
        </div>
    )
}