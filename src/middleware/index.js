import thunk from 'redux-thunk';
import { applyMiddleware } from "redux";
import logger from './logger'
import { getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";

export default applyMiddleware(
    thunk.withExtraArgument({ getFirebase, getFirestore }),
    logger
);