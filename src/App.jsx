
import { useState } from 'react'
import Header from './components/Header'
import CarList from './components/CarList'
import Categoria from './components/Categoria'
import Bienvenida from './components/Bienvenida'
import { productos as data } from './data/productos'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null)

  const handleCategoriaSeleccionada = (cat) => {
    setCategoriaSeleccionada(cat)
  }

  return (
    <>
      <Header onCategoriaSeleccionada={handleCategoriaSeleccionada} />

      {/* Mostrar bienvenida solo si no hay categoría */}
      {!categoriaSeleccionada && <Bienvenida />}

      <Categoria nombre={categoriaSeleccionada} />

      {categoriaSeleccionada && (
        <CarList productos={data[categoriaSeleccionada]} />
      )}
      <Footer />
    </>
  )
}

export default App



