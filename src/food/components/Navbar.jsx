import { Link } from 'react-router-dom';
import React from 'react';


export const Navbar = () => {
  return (
    <div className='navbar navbar-info bg-info mb-4 px-4'>
      <div>
        <span className="navbar-brand">
          <i className="fas fa-calendar-alt"></i>
          <Link to={'/inicio'} className='text-dark'  >Inicio</Link> 
        </span>
         
        <span className="navbar-brand">
          <i className="fas fa-star"></i>
          <Link to={'/favorite'} className='text-dark' >Favoritos</Link>    
        </span> 
        
        <span className="navbar-brand">
          <i className="fas fa-star"></i>
          <Link to={'/categories'} className='text-dark' >Categorias</Link>    
        </span> 
      </div>
    </div>
  )
}
