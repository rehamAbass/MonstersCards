import './music.css'
import { React } from 'react'
import natural from "./n.mp3";
const aud = new Audio(natural);
const Music = () => {
    let flagPlaying = false;
    return (
        <div className='myAudio'>
            <button
                style={{ backgroundColor: 'rgb(96, 223, 232, 0.432)' }}
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
                Play
            </button>
            <button
                className='btnAudio'
                style={{
                    backgroundColor: 'rgb(102, 9, 109,0.44)'
                }}
                onClick={() => {
                    if (flagPlaying === true) {
                        flagPlaying = false;
                        aud.pause();
                        aud.loop = false;
                    }
                }}>Pause</button>

        </div>
    );


}


export default Music;