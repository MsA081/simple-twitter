import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core';
import App from './component/App'
import Theme from './component/theme'
ReactDOM.render( 
    <ThemeProvider theme = { Theme } >
    <App / >
    </ThemeProvider>, document.getElementById('root')
);