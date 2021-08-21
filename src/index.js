import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/views/App';
import ErrorBoundry from './components/organismes/ErrorBoundry';
import RestoService from './services/resto-service';
import RestoServicesContext from './components/organismes/RestoServiceContext';
import store from './store';


const restoService = new RestoService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <RestoServicesContext.Provider value={restoService}>
        <Router>
          <App />
        </Router>
      </RestoServicesContext.Provider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);



