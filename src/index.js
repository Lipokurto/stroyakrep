import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import rootReducer from './reducers'
import {Provider} from 'react-redux'
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <div className='mainContainer'>
        <App />
      </div>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
