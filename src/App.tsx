import './App.css';
import Experience from './Utils/Experience';

window.onload = function(){
  const experience = new Experience(document.querySelector(".experience-canvas"));
}

function App() {
  return (
    <div className="experience">
      <canvas className="experience-canvas"></canvas>
    </div>
    
  );
}

export default App;
