import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './view/App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store, {porsistor} from './store'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
        <BrowserRouter>
                <Provider store={store}>
                        <PersistGate persistor={porsistor}>
                                <App />
                        </PersistGate>
                </Provider>
        </BrowserRouter>,
document.getElementById('root')
);

