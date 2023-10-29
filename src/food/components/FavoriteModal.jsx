
import React, {  useEffect, useState } from 'react'
import Modal from 'react-modal';
import {useModalStore} from '../../hooks/useModalStore';
import { useFavoriteStore } from '../../hooks/useFavoriteStore';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');
let style ='btn btn-outline-warning btn-block';

export const FavoriteModal = () => {

    const {isModalOpen,closeFavoriteModal} = useModalStore();
    const [value, setValue] = useState('Guardar');
    const { registerFoodRandom } = useFavoriteStore();

    const onCloseModal = () => {
        closeFavoriteModal();
    }
    
    const [favorite, setFavorite] = useState(null);
/*
    useEffect(() => {
        setFavorite(registerFoodRandom());
        console.log(favorite);
    },[favorite]);*/

    const changeNameButton = (event)=>{
        event.preventDefault();
        //const favorite = localStorage.getItem('favorite');
        if(value ==='Guardar') {
            setValue('Quitar')
            //registerFoodRandom();
            style='btn btn-outline-primary btn-block';
            //localStorage.setItem('favorite',1);
        } else {
            setValue('Guardar');
            style='btn btn-outline-warning btn-block';
            //localStorage.setItem('favorite',null);
        }
    }

    return (
    <Modal isOpen={isModalOpen}
        onRequestClose={onCloseModal}       
        style={customStyles}
        className='modal'
        overlayClassName="modal-fondo"
        closeTimeoutMS={200} >
            <div className='container'>
                <h2 className='text-center'>Hola</h2>

                <button
                    onClick={changeNameButton} 
                     className={style}
                >
                <i className="far fa-star"></i>
                <span> {value} en favoritos</span>
            </button>
            </div>

    </Modal>
  )
}
