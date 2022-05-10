import React from "react";
import Data from "./Data";


export default function Meme(){

    let url
    function getMemeImage(){
        const memesArray = Data.data.memes
        const randomNumber = Math.floor(Math.random()* memesArray.length)
        const url = memesArray[randomNumber].url

        console.log(url)

    }
    return(  
      
        <main>
            <div className="form">
               
                <input
                type="text"
                placeholder="Top text"
                className="form--input"
                />
                <input
                type="text"
                placeholder="Bottom text"
                className="form--input"
                />
                <button className="form--button" 
                onClick={getMemeImage}>
     
            
                Get a new meme image               
                </button>

             <p> {url} </p>
            </div>
        </main>
    )
}