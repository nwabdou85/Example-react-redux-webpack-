import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Router,Route, IndexRouter,browserHistory } from 'react-router';
import AllReducers from './reducers/index.js';
import Tarifs from './components/Tarif.jsx';


const store = createStore(AllReducers);



const routes = (
   <Provider store={store}>
	  <Router history={browserHistory}>
	    <Route path="/" component={Tarifs}>
	    </Route>
	  </Router>
  </Provider>
	);


ReactDOM.render(
	routes
	,document.getElementById('root'));