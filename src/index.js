import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { changeRoute, requestRobot } from './reducers'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const logger = createLogger();
const reducer = combineReducers({ changeRoute, requestRobot });

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
