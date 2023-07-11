import React from 'react'
import "./styles/Meme.css"

function Meme() 
{
    function generateRandomMemes() {
        const memesArray = memesData.data.memes
        
        const min = 0
        const max = memesArray.length
        let random = Math.floor(min + Math.random() * (max - 1 - min));
        
        console.log(memesArray[random])
    }
    
    return (
        <main>
            <form className="form">
                <input className="form--input" placeholder="Top text" type="text" />
                <input className="form--input" placeholder="Bottom text" type="text" />
                <button className="form--button">Get a new meme image 🖼</button>
            </form>
        </main>
    )
}

export default Meme;