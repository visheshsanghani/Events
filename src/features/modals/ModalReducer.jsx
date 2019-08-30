import {createReducer} from '../../app/common/util/reducerUtil'; 
import { MODAL_OPEN, MODAL_CLOSE } from './modalConstants';

const initialState = null;


const openModal = (state , payload)  => {
 const {modalType , modelProps} = payload;
 return {
     modalType,
     modelProps
 }
}

const closeModal = (state) =>{
    return null
}

export default createReducer(initialState ,{
    [MODAL_OPEN] : openModal,
    [MODAL_CLOSE] : closeModal
})