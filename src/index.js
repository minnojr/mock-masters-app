import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Entry from './components/Entry';
import * as serviceWorker from './serviceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import { createStore, compose } from "redux";
import { Provider } from 'react-redux';
import { reduxFirestore } from "redux-firestore";
import { reactReduxFirebase } from "react-redux-firebase";
import fbCongif from './config/fbConfig'


import { rootReducer } from './reducers';
import middleware from './middleware';

const store = createStore(rootReducer,
        compose(
            middleware,
            reduxFirestore(fbCongif),
            reactReduxFirebase(fbCongif, {
                useFirestoreForProfile: true,
                userProfile: 'users',
                attachAuthIsReady: true })
        ),
    );

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <Entry />
        </Provider>,
        document.getElementById('root')
    );
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
