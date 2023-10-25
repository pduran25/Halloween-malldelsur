import styled from 'styled-components';
import sound from './assets/musica.mp3';
import  {useState} from 'react';


import './App.css'


function App() {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const codigo = params.get('personaje');
  console.log("mascota numero: "+codigo);
  var source = "";
  var source2 = "";
  //const [sourcea, setSourcea] = useState("./assets/chiverito/chivp3.glb"); //codigo adicional
  //const [source2a, setSource2a] = useState("./assets/chiverito/chivp3.usdz"); //codigo adicional
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);


  



  
if(codigo == 1){
  source = "./assets/halloween1/momia6.glb"
  source2 = "./assets/halloween1/momia6.usdz"
}else if(codigo == 2){
  source = "./assets/halloween1/fan4.glb"
  source2 = "./assets/halloween1/fan4.usdz"
}


const toggleAudio = () => {
  const audioElement = document.getElementById('myAudio');

  if (isAudioPlaying) {
    audioElement.pause();
  } else {
    audioElement.play();
  }

  setIsAudioPlaying(!isAudioPlaying);
};






  return (<div className="App">
<model-viewer src={source} ios-src={source2} camera-controls camera-orbit="-40deg 70deg 200m" camera-target="0 0 0" ar ar-modes="scene-viewer webxr quick-look" xr-environment ar-placement="wall" autoplay>

        <SoundButton
        src={isAudioPlaying ? './assets/audio.png' : './assets/sinaudio.png'}
        alt={isAudioPlaying ? 'Sonido inactivo' : 'Sonido activo'}
        onClick={toggleAudio}
      />

      <audio id="myAudio" src={sound} loop/>


        <Boton slot="ar-button" >
          Cacería Virtual
        </Boton>
  </model-viewer>
    </div>
  )
}

const SoundButton = styled.img`
display: inline-block;
`;







const Boton = styled.button`

display: inline-block;
border: none;
border-radius: 4px;
background-color: #F8621F;
color: #fff;
padding: 12px 24px;
font-size: 16px;
font-weight: bold;
text-align: center;
text-decoration: none;
cursor: pointer;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
transition: background-color 0.3s ease;
position: absolute; 
right: 100px; 
left: 100px;

bottom: 100px; 

&:hover {
  background-color: #F8621F;
}

&:focus {
  outline: none;
  background-color: #F8621F;
}
`;

export default App;
