import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import 'antd/dist/antd.min.css';
import store from './app/store' /* Varible que se le entrega al provideer */


ReactDOM.render(
  <React.StrictMode>
    <Router>
        {/* Envolviendo la app en el store, ahora toda nuestra app esta dentro del provider, por lo que cada componente tiene acceso al store variable*/}
        <Provider store={store}>
        <App />
        </Provider>
       
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
