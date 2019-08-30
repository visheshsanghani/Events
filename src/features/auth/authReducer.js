import { createReducer } from "../../app/common/util/reducerUtil";
import { LOGIN_USER, LOG_OUT_USER } from "./authConstants";

const initialState ={
    authenticated : false,
    currentUser : null
}

const loginUser = (state , payload) =>{
    return {
        authenticated : true ,
        currentUser : payload.credentials.email
    }
}

const signOutUser  = () =>{
    return {
        authenticated : false,
        currentUser : null
    }
}

export default createReducer(initialState ,{
    [LOGIN_USER]:loginUser,
    [LOG_OUT_USER]:signOutUser
})

