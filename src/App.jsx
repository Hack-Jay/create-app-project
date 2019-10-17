import React from "react";
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import reducer from './reducer';
import Layout from './Layout'
import Login from './views/Login'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers(reducer), /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));

const defaultTheme = createMuiTheme();
const themeInstance = {
  ...defaultTheme,
  palette: {
    primary: '#0084ff',
    secondary: pink,
  },
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  primary: "yellowgreen",
  white: 'white',
  avatarColor: '#f50057'
};

export default function App() {
  return (
    <ThemeProvider 
        theme={themeInstance}
    >
        <Provider store={store}>
            <Layout />
        </Provider>
    </ThemeProvider>
  );
}
