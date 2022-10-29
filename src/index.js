import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import { legacy_createStore as createStore} from 'redux'
import { applyMiddleware } from "redux";
import reducer from "./reducers";
import reduxThunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(reduxThunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
