import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer, createTransform } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import promise from 'redux-promise-middleware';
import loggerMiddleware from './logger-middleware';
import thunkMiddleware from 'redux-thunk';
import reducer, { IRootState } from '../redux';
import JSOG from "jsog";
import {version} from '../../package.json'

let localVersion = localStorage.getItem("version");
if(version !== localVersion){
  localStorage.clear();
  localStorage.setItem("version",version);
}
const JSOGTransform = createTransform(
  (inboundState, key) => JSOG.encode(inboundState),
  (outboundState, key) => JSOG.decode(outboundState)
)
const persistConfig = {
  key: 'root',
  storage,
  transforms: [JSOGTransform]
}
const persistedReducer = persistReducer(persistConfig, reducer)
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const defaultMiddlewares = [
  thunkMiddleware,
  promise,
  loggerMiddleware
];
const composedMiddlewares = middlewares =>
  process.env.NODE_ENV === 'development'
    ? composeEnhancers(
      applyMiddleware(...defaultMiddlewares, ...middlewares),
    )
    : compose(applyMiddleware(...defaultMiddlewares, ...middlewares));

const initialize = (initialState?:IRootState, middlewares = []) => createStore(persistedReducer, initialState, composedMiddlewares(middlewares));

let store = initialize()
let persistor = persistStore(store)
export  {
  store, persistor
}

// export default initialize;
