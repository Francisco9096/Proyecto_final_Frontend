/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
*/ 
import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import "./App.css";

function App() {
  const [productos, setProductos] = useState([]);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const fetchProductos = async () => {
      const { data, error } = await supabase
        .from("productos")
        .select("*");

      if (error) {
        console.error("Error Supabase:", error);
      } else {
        console.log("Productos:", data);
        setProductos(data);
      }
    };

    fetchProductos();
  }, []);

  const venderProducto = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/vender/${id}/`, {
        method: "POST",
      });

      const data = await response.json();
      setMensaje(data.mensaje || data.error);
    } catch {
      setMensaje("Error conectando con backend");
    }
  };

  return (
  <div className="container">
    <h1 className="title">Heladería 🍦</h1>

    <div className="product-list">
      {productos.map((producto) => (
        <div className="card" key={producto.id}>
          <h3>{producto.nombre}</h3>
          <p className="price">Precio: ${producto.precio_publico}</p>

          <button onClick={() => venderProducto(producto.id)}>
            Vender
          </button>
        </div>
      ))}
    </div>

    
    {mensaje && (
      <p style={{
        marginTop: "20px",
        color: "#22c55e",
        fontSize: "1.2rem",
        fontWeight: "bold"
      }}>
        ✅ {mensaje}
      </p>
    )}

  </div>
  );
}

export default App;
