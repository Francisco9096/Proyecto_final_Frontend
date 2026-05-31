/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { useEffect, useState } from "react";
import "./App.css";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://your-supabase-url.supabase.co";
const supabaseKey = "your-supabase-key";
const supabase = createClient(supabaseUrl, supabaseKey);

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

  useEffect(() => {
  const fetchProductos = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/productos/");
    const data = await response.json();
    setProductos(data);
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
      console.log("Inventario:", data.inventario)
    } catch {
      setMensaje("Error conectando con backend");
    }
  };

  return (
  <div className="container">
    <h1 className="title">Heladería La Alegría 🍦</h1>

    <div className="product-list">
      {productos.map((producto) => (
        <div className="card" key={producto.id}>
          <h3>{producto.nombre}</h3>
          <p className="price">Precio: ${producto.precio_publico}</p>
          <p>Stock: {producto.stock}</p>

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
*/ 
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [productos, setProductos] = useState([]);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/productos/");
        const data = await response.json();

        console.log("Productos:", data); // 👈 DEBUG
        setProductos(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProductos();
  }, []);
/*
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
*/
  const venderProducto = async (id) => {
  try {
    await fetch(`http://127.0.0.1:8000/api/vender/${id}/`, {
      method: "POST"
    });

    // ✅ recargar productos después de vender
    const response = await fetch("http://127.0.0.1:8000/api/productos/");
    const data = await response.json();
    setProductos(data);

    setMensaje("Venta realizada con éxito");

  } catch {
    setMensaje("Error conectando con backend");
  }
};

  return (
    <div className="container">
      <h1 className="title">Heladería La Alegría 🍦</h1>

      {productos.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="product-list">
          {productos.map((producto) => (
            <div className="card" key={producto.id}>
              <h3>{producto.nombre}</h3>

              {/* ✅ IMPORTANTE */}
              <p>Precio: ${producto.precio}</p>
              <p>Stock: {producto.stock}</p>

              <button
                onClick={() => venderProducto(producto.id)}
                disabled={producto.stock <= 0}
              >
                {producto.stock <= 0 ? "Agotado" : "Vender"}
              </button>
            </div>
          ))}
        </div>
      )}

      {mensaje && <p style={{ marginTop: "20px" }}>{mensaje}</p>}
    </div>
  );
}

export default App;