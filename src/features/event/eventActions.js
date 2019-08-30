import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, FETCH_EVENT } from "./eventConstants";
import { asyncActionStart, asyncActionFinish, asyncActionError } from "../async/asyncActions";
import { fetchSampleData } from "../../app/data/mockApi";



export const createEvent = (event) =>{
    return{
        type : CREATE_EVENT,
        payload : {
            event : event
        }
    }
}

export const updateEvent = (event) =>{
    return{
        type : UPDATE_EVENT,
        payload:{
            event : event
        }
    }
}

export const deleteEvent = (eventId) =>{
    return{
        type : DELETE_EVENT,
        payload:{
            eventId : eventId
        }
    }
}

export const loadEvents = () =>{
    return async dispatch =>{
        try{
            dispatch(asyncActionStart())
            const events = await fetchSampleData();
            dispatch({type : FETCH_EVENT , payload : {events}})
            dispatch(asyncActionFinish())
        }
        catch (error) {
            console.log(error);
            dispatch({asyncActionError})
        }
    }
}

