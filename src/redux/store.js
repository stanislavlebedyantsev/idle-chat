import {applyMiddleware, createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagasMiddleware from 'redux-saga';
import MessageReducer from './messegesReduser';

const sagaMiddleware = createSagasMiddleware();

const reducers = combineReducers({
  messages: MessageReducer,
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

// sagaMiddleware.run(rootSaga);

// const store = configureStore({
//   reducer: {
//     messages: MessageReducer,
//   },
// });

export default store;
