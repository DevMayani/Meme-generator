import React from 'react';
import memeData from './memeData';



export default function Meme () {
  const [memeImage, setMemeImage]=React.useState("") 

  function getMemeImage () {
    const memesArray = memeData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage( memesArray[randomNumber].url)
  }


  return (
    <main>
    <div className='form'>
    <div className='inp'>
    <input 
    type="text"
    placeholder='Top-text'
    />
    <input 
    type="text"
    placeholder='Bottom-text'
    />
    </div>
    <button onClick={getMemeImage}>Get a new meme image</button>
    <div>
    
    </div>
    
    </div>
    <img 
    src={memeImage}
    className='meme-image'
    />
    </main>
  )
}
