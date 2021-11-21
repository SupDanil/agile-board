import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RootStore from './store';
import {CssBaseline} from '@mui/material';

const store = RootStore.create({});

export const StoreContext = createContext(store);


ReactDOM.render(
    <React.StrictMode>
        <StoreContext.Provider value={store}>
            <CssBaseline/>
            <App/>
        </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

