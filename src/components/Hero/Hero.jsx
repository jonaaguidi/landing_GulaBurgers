import { useState } from 'react';
import './Hero.css';

function App() {
  const [titleShadow, setTitleShadow] = useState('10px 10px 5px black'); // Estado para la sombra del título

  const handleMouseMove = (e) => {
    const rXP = (e.pageX - e.currentTarget.offsetLeft - e.currentTarget.offsetWidth / 2);
    const rYP = (e.pageY - e.currentTarget.offsetTop - e.currentTarget.offsetHeight / 2);
    const newShadow = `${rYP / 10}px ${rXP / 80}px rgba(227, 6, 19, 0.8), ${rYP / 8}px ${rXP / 60}px rgba(255, 237, 0, 1), ${rXP / 70}px ${rYP / 12}px rgba(0, 159, 227, 0.7)`;
    setTitleShadow(newShadow);
  };

  return (
    <div className="heroContainer">
      <h1 className="heroTitle" onMouseMove={handleMouseMove} style={{ textShadow: titleShadow }}>
        Bienvenido al INFIERNO
      </h1>
      <p className="heroSubtitle">¿Cuál es tu Pecado de Hoy?</p>
      <button className='heroButton'>
        Click Aqui
      </button>
    </div>
  );
}

export default App;

