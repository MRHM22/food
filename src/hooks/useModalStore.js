import { useDispatch, useSelector } from 'react-redux'
import { onModalClose, onModalOpen } from '../store';

export const useModalStore = () => {

    const dispatch = useDispatch();

    const {isModalOpen} = useSelector(state=> state.modal);
    
    const openFavoriteModal = () =>{
        dispatch(onModalOpen());
    }
    const closeFavoriteModal = () =>{
        dispatch(onModalClose());
    }
    /*const toggleFavoriteModal =()=>{
        (isModalOpen) ? openFavoriteModal() : closeFavoriteModal();
    }*/
  
    return {
        isModalOpen,
        closeFavoriteModal,
        openFavoriteModal,
        //toggleFavoriteModal
    }
}
