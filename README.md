# 🍦 Heladería Fullstack

Proyecto final integrando:

- Frontend: React + Vite
- Backend: Django + Django REST Framework

## 🚀 Funcionalidades

- Venta de productos
- Validación de inventario
- API REST con Django
- Integración frontend-backend mediante fetch

## 🧠 Arquitectura

React → API Django → Base de datos

## 💻 Tecnologías

- React
- Django
- Python
- JavaScript

## 📦 Estado

✅ Integración funcionando  
🔄 En desarrollo (más endpoints)

# 🍦 Proyecto Heladería - Sistema Fullstack

## 📌 Descripción

Este proyecto consiste en una aplicación web fullstack para la gestión de una heladería, desarrollada con **React (frontend)** y **Django (backend)**.

El sistema permite visualizar productos, gestionar ventas y controlar el inventario en tiempo real, simulando el comportamiento de un sistema empresarial básico.

---

## 🧠 Arquitectura del Sistema

El sistema está construido bajo una arquitectura desacoplada de 3 capas:

### Componentes:

- **Frontend (React):**
  - Interfaz de usuario
  - Visualización de productos
  - Ejecución de ventas (botón "Vender")
  - Consumo de API mediante `fetch`

- **Backend (Django + Django REST Framework):**
  - Gestión de lógica de negocio
  - Control de inventario
  - Procesamiento de ventas
  - Exposición de endpoints REST

- **Base de datos (SQLite):**
  - Almacenamiento de productos
  - Control de stock
  - Relación con ingredientes

---

## 🔄 Flujo de Funcionamiento

1. El usuario visualiza productos en la interfaz React  
2. React solicita productos al backend (`GET /api/productos/`)  
3. El usuario realiza una venta  
4. React envía la solicitud (`POST /api/vender/<id>/`)  
5. Django:
   - valida disponibilidad de stock  
   - actualiza inventario  
   - responde al frontend  
6. React actualiza la interfaz en tiempo real  

---

## 🚀 Funcionalidades

✅ Visualización dinámica de productos  
✅ Consumo de API REST  
✅ Control de inventario por producto  
✅ Validación de stock  
✅ Actualización de inventario en tiempo real  
✅ Interfaz gráfica moderna (cards)  
✅ Backend administrativo con Django Admin  

---

## 🧱 Modelo de Datos

### Producto

- nombre  
- precio_publico  
- stock  
- ingredientes (relación many-to-many)  

### Ingrediente

- nombre  
- precio  
- calorías  
- inventario  
- tipo (base o complemento)  

---

## 🔌 Endpoints API

### 📦 Listar productos

GET /api/productos/

### 🧾 Vender producto

POST /api/vender//

---

## ⚙️ Instalación y Ejecución

### ✅ Requisitos

- Python 3.x
- Node.js
- npm

---

### 🔵 Backend (Django)

```bash
cd backend
pip install -r requirements.txt  # si no existe requirements, usar pip install django djangorestframework
python manage.py migrate
python manage.py runserver

👉 Disponible en:
http://127.0.0.1:8000/


🔵 Frontend (React)
Shellcd frontendnpm installnpm run devMostrar más líneas
👉 Disponible en:
http://localhost:5173/


🌐 Despliegue
El frontend fue desplegado en:
👉 https://proyecto-final-frontend-nu.vercel.app
⚠️ Nota:
El backend no está desplegado en producción, por lo tanto las funcionalidades que requieren lógica (como la venta) solo funcionan en entorno local.

⚠️ Consideraciones Técnicas

Inicialmente se utilizó Supabase para gestión de datos.
Posteriormente se migró a Django como fuente principal de datos para mantener consistencia con la lógica de negocio.
Actualmente el sistema utiliza una única fuente de verdad en el backend.


🚧 Posibles Mejoras

Despliegue del backend en la nube
Autenticación de usuarios
Registro de historial de ventas
Mejora en la UX (productos agotados, notificaciones visuales)
Uso de una base de datos más robusta (PostgreSQL)

