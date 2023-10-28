import React from 'react'
import { Link } from 'react-router-dom'

export const FoodHeader = () => {
  return (
    <div className='container'>
        <div className="card text-center">
            <div className="card-header">
                Bienviendos
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">Acá encontraras las mejoras comidas las cuales puede realizar facilmente</p>
                <Link href="#" className="btn btn-primary">Haz clic para sugerirte un plato</Link>
            </div>
        </div>
    </div>
  )
}
