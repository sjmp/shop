import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import rootReducer from './reducers'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
import storage from 'redux-persist/es/storage';

export const authInterceptor = ({ dispatch }) => next => action => {
  // if (action.status === 401) {
  //   dispatch(UserActionCreators.logoutUser());
  // }

  return next(action);
}

const middleware = applyMiddleware(thunk, authInterceptor);

// config for the storage persistance of redux store
const config = {
  key: 'app',
  storage,
}

const reducer = persistReducer(config, rootReducer);

// store
const store = createStore(
  reducer,
  compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f)
);

let persistor = persistStore(store);

ReactDOM.render(
  <PersistGate persistor={persistor} loading={<div>LOADING</div>}>
    <Provider store={store}>
       <App />
     </Provider>
   </PersistGate>,
  document.getElementById('root')
);
registerServiceWorker();
