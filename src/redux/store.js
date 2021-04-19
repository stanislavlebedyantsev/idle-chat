import {applyMiddleware, createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagasMiddleware from 'redux-saga';
import MessageReducer from './messegesReduser';

import initialMessages from './initialData.json';

const sagaMiddleware = createSagasMiddleware();

const reducers = combineReducers({
  messages: MessageReducer,
});

export const store = createStore(
  reducers,
  initialMessages,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export default store;
