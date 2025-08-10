
import '../estilo/Bienvenida.css';



function Bienvenida() {
  return (
    <div className="bienvenida">
      <img src="/imagenes/vivero4.jpg" alt="Jardín" className="imagen-jardin" />
      <div className="texto">
        <h1>Bienvenido al vivero El Paso</h1>
        <p>
          Somos un vivero dedicado al cultivo y diseño de hermosas plantas,
          herramientas y accesorios para embellecer los hogares de nuestros clientes.
          Cuidamos cada detalle para ofrecerte lo mejor de la naturaleza.
        </p>
      </div>
    </div>
  )
}

export default Bienvenida
