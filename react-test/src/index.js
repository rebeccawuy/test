import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Result from './Event-test';
import FormTest from './Form-test'

class Result1 extends Component{
    render(){
        return (
            <div>
                <App />
                <Result/>
                <FormTest />
            </div>
            
        )
    }
}

ReactDOM.render(
    // element1,
    <Result1 />,
    document.getElementById('root')
  );