import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (typeof(window) !== 'undefined' && typeof(document) !== 'undefined') {
    window.onload = () => {
        ReactDOM.render(<App/>, document.getElementById('app'));
    };
}
