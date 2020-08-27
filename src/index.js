import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import { store } from './redux/store/store'
import App from './components/containers/App.jsx';
import styles from './styles/Root.css'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

