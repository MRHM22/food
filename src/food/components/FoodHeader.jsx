import React from 'react'
import { useModalStore } from '../../hooks/useModalStore'
import { FavoriteModal } from './FavoriteModal';

export const FoodHeader = () => {

  const {openFavoriteModal} = useModalStore();

  const onClickModal = (event)=>{
    openFavoriteModal();
  }
  return (
    <>
    <div className='container'>
        <div className="card text-center">
            <div className="card-header">
                Bienviendos
            </div>
            <div className="card-body">
                <h5 className="card-title">Los mejores platos para preparar</h5>
                <p className="card-text">Acá encontraras las mejoras comidas las cuales puede realizar facilmente</p>
                <button onClick={onClickModal} className="btn btn-primary">Haz clic para sugerirte un plato</button>
            </div>
        </div>
        
    </div>
    <FavoriteModal />
    </>
  )
}
