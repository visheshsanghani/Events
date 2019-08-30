import { LOGIN_USER, LOG_OUT_USER } from "./authConstants";
import {closeModal} from '../modals/modalActions'

export const login = (credentials) =>{
    return dispatch =>{
    dispatch( 
     {
        type : LOGIN_USER,
        payload :{
            credentials : credentials
        }
    })
    dispatch(closeModal())
    }
}

export const logout = () =>{
    return{
        type : LOG_OUT_USER
    }
}