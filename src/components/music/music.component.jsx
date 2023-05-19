import './music.css'
import { React } from 'react'
import natural from "./n.mp3";
const aud = new Audio(natural);
const Music = () => {
    let flagPlaying = false;
    return (
        <div className='myAudio'>
            <button
                style={{backgroundColor: 'rgb(10,150,10, 0.2)' }}
                // 
                className='btnAudio'
                onClick={() => {
                    if (flagPlaying === false) {
                        aud.loop = true;
                        aud.play();
                        flagPlaying = true;
                    }
                }}
            >
                 ▶ 
            </button>
            <button
                className='btnAudio'
                style={{backgroundColor: 'rgb(150, 10, 10, 0.2)'}}
                onClick={() => {
                    if (flagPlaying === true) {
                        flagPlaying = false;
                        aud.pause();
                        aud.loop = false;
                    }
                }}> ⏸ </button>

        </div>
    );


}


export default Music;
