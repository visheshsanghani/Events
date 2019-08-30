import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {configStore} from './app/store/configStore';
import {Provider} from 'react-redux';

import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './app/common/util/ScrollToTop';
import { loadEvents } from './features/event/eventActions';

import './index.css';

const store = configStore();
store.dispatch(loadEvents())


const rootEL = document.getElementById("root");

let render = () =>{
    ReactDOM.render(
    <Provider store = {store}>
    <BrowserRouter>
    <ScrollToTop>
    <App />
    </ScrollToTop>
    </BrowserRouter>
    </Provider>
    , rootEL);
}

if(module.hot){
    module.hot.accept("./app/layout/App", ()=>{
        setTimeout(render);
    })
}

render();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
