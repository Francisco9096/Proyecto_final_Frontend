/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
*/ 
import { useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("");

  const venderProducto = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/vender/1/", {
        method: "POST",
      });

      const data = await response.json();
      setMensaje(data.mensaje || data.error);
    } catch (error) {
      console.error(error);
      setMensaje("Error conectando con el backend");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Heladería 🍦</h1>

      <button onClick={venderProducto}>
        Vender Copa Vainilla
      </button>

      <p>{mensaje}</p>
    </div>
  );
}

export default App;


