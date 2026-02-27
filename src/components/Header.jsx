
import { useState } from "react";
import "../estilo/Header.css";

const Header = ({ onCategoriaSeleccionada }) => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="logo2.jpg" alt="Logo Vivero" />
      </div>

      {/* Botón hamburguesa */}
      <button className="hamburguesa" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`navegacion ${menuAbierto ? "activo" : ""}`}>
        <button onClick={() => onCategoriaSeleccionada(null)}>Home</button>
        <button onClick={() => onCategoriaSeleccionada("plantas")}>Plantas</button>
        <button onClick={() => onCategoriaSeleccionada("herramientas")}>Herramientas</button>
        <button onClick={() => onCategoriaSeleccionada("regaderas")}>Regaderas</button>
      </nav>
    </header>
  );
};

export default Header;