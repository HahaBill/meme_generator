import React from 'react'
import "./styles/Meme.css"
import memesData from "../memes"

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

    return (
        <main>
            <div className="form">
                <input className="form--input" placeholder="Top text" type="text" />
                <input className="form--input" placeholder="Bottom text" type="text" />
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div>
                <img src={meme.randomImage} className="meme--image" />
            </div>
        </main>
    )
}

export default Meme;