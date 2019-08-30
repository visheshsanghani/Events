import { combineReducers } from 'redux';
import eventReducer from '../../features/event/eventReducer';
import {reducer as FormReducer} from 'redux-form';
import ModalReducer from '../../features/modals/ModalReducer';
import authReducer from '../../features/auth/authReducer';
import asyncReducer from '../../features/async/asyncReducer';

const rootReducer = combineReducers({
    events : eventReducer,
    form : FormReducer,
    modals : ModalReducer,
    auth : authReducer,
    async : asyncReducer
})

export default rootReducer;