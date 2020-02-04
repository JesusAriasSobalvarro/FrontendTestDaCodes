import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainContainer from './components/MainContainer';
import * as serviceWorker from './serviceWorker';
import { configureStore } from "./store";
import { Provider } from 'react-redux'

//const store = createStore(rootReducer, rootState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = configureStore();
ReactDOM.render(<Provider store={store}><MainContainer /></Provider>, document.getElementById('root'));

//export const store = configureStore(history);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




