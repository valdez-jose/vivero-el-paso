

const Categoria = ({ nombre }) => {
  const titulos = {
    plantas: "🌿 Nuestras Plantas",
    herramientas: "🛠️ Herramientas de Jardín",
    regaderas: "💧 Regaderas Disponibles"
  }
  if (!nombre) return null
  return (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
        <h2>{titulos[nombre] || "Categoría seleccionada"}</h2>
    </div>
  )
}

export default Categoria
