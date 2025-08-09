
import React from 'react'
import '../estilo/CarList.css'

const CarList = ({ productos }) => {
  return (
    <div className='card-list'>
        {productos.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.imagen} alt={item.nombre} />
          <h3>{item.nombre}</h3>
          <p>{item.descripcion}</p>
        </div>
      ))}
    </div>
  )
}

export default CarList
