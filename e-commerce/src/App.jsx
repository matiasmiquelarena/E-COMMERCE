// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';  // Importar el componente Navbar

const App = () => {
  return (
    <div>
      <Navbar />  {/* Usar el componente Navbar */}
      <h1>Bienvenido a mi E-commerce</h1>
    </div>
  );
};

export default App;
