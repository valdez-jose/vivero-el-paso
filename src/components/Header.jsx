import '../estilo/Header.css';

const Header = ({ onCategoriaSeleccionada }) => {
  return (
    <header className='header'>
       <div className="logo">
        <img src="/imagenes/logo2.jpg" alt="Logo Vivero" />
      </div>
      
      <nav className="navegacion">
        <button onClick={() => onCategoriaSeleccionada(null)}>Home</button>
        <button onClick={() => onCategoriaSeleccionada("plantas")}>Plantas</button>
        <button onClick={() => onCategoriaSeleccionada("herramientas")}>Herramientas</button>
        <button onClick={() => onCategoriaSeleccionada("regaderas")}>Regaderas</button>
      </nav>
    </header>
  )
}

export default Header
