import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from "redux";
import counter from './reducers/counter'
import Counters from './components/Counter'

const store = createStore(counter);

const render = () => ReactDOM.render(
    <Counters 
        value = {store.getState()} 
        onIncrement = { () => store.dispatch({type: 'INCREASED'})} 
        onDecrement = { () => store.dispatch({type: 'DECREASED'})} 
    />, 
    document.getElementById('root')
);

render();
store.subscribe(render);
