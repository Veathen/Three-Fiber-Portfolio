import './App.css';
import Experience from './Utils/Experience';
import { ReactThreeFiber } from '@react-three/fiber';
import { Cylinder } from '@react-three/drei';
import { PerspectiveCamera } from '@react-three/drei/core';

window.onload = function(){
  const experience = new Experience(document.querySelector(".experience-canvas"));
}

function App() {
  return (
    <div className="experience">
      <canvas className="experience-canvas">
      </canvas>
    </div>
    
  );
}

export default App;
