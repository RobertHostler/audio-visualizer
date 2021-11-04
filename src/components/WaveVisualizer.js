import Wave from "@foobar404/wave";
import { useState } from "react";
import music from "../music/deliberate-thought-by-kevin-macleod-from-filmmusic-io.mp3";
import "./styles.css";

function WaveVisualizer(){
    let [wave] = useState(new Wave());
    let [options, setOptions] = useState({type: "wave"});

    function changeToWave(){
        setOptions({type: "wave"})
    }

    function changeToShockWave(){
        setOptions({type: "shockwave"})
    }

    function changeToRoundWave(){
        setOptions({type: "round wave"})
    }

    function changeToRing(){
        setOptions({type: "ring"})
    }

    return(
        <div class="main">
          <div class="card-container">

            <div className="card audio-card glow">
              <audio
                  className="glow"
                  id="music-player"
                  controls
                  src={music}
                  >
              </audio>
            </div>

            <div class="card animation-window glow">
              <canvas id="music-visualizer">
                  {wave.fromElement("music-player", "music-visualizer", options)}
              </canvas>
            </div>

            <div className="card glow">
              <button onClick={changeToWave} className="button glow">Wave</button>
              <button onClick={changeToShockWave} className="button glow">Shockwave</button>
              <button onClick={changeToRoundWave} className="button glow">Round Wave</button>
              <button onClick={changeToRing} className="button glow">Ring</button>
            </div>
          </div>

        </div>
    );
}

export default WaveVisualizer;



// <div className="main">
//     <h1 className="title">The Audio Visualizer</h1>
//     <div className="container">
//         <div>
//             <audio
//                 id="music-player"
//                 controls
//                 src={music}
//                 >
//             </audio>
//         </div>
//         <div className="animation-window">
//             <canvas id="music-visualizer">
//                 {wave.fromElement("music-player", "music-visualizer", options)}
//             </canvas>
//         </div>
//         <div className="button-menu">
//             <button onClick={changeToWave} className="button">Wave</button>
//             <button onClick={changeToShockWave} className="button">Shockwave</button>
//             <button onClick={changeToRoundWave} className="button">Round Wave</button>
//             <button onClick={changeToRing} className="button">Ring</button>
//         </div>
//     </div>
// </div>
// );
