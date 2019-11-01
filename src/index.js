import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


// Material
import CssBaseline from '@material-ui/core/CssBaseline';

// Componentes
import Header from './components/common/header/Header';
import Router from "./Router";

// The CODE!
const Root = () => {
    return (
        <div>
            <CssBaseline />
            <Header />
            <div className="contenedor">
                <Router />
            </div>
        </div>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
