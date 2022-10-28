import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import { legacy_createStore as createStore} from 'redux'
import { applyMiddleware, combineReducers } from "redux";
import { usersReducer } from "./reducers/user";
import reduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  users: usersReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
