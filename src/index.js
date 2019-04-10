import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import { createStore, compose } from "redux";
import { Provider } from 'react-redux';
import { reduxFirestore } from "redux-firestore";
import { reactReduxFirebase } from "react-redux-firebase";
import fbCongif from './config/fbConfig'


import reducers from './reducers';
import middleware from './middleware';

const store = createStore(reducers,
        compose(
            middleware,
            reduxFirestore(fbCongif),
            reactReduxFirebase(fbCongif)
        ),
    );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
