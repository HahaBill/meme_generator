import React from "react"
import "./styles/Header.css"
function Header() {

    return (
        <header className="header">
            <img 
                src="./assets/troll-face.png"
                className="header--image"
            ></img>
            <h2 className="header--title">Header component</h2>
            <h4 className="header--project">Create your custom memes</h4>
        </header>
    )
}

export default Header;