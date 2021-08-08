import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Contact from './components/Contact';
import Contacts from './components/Contacts';

import Header from './components/Header';

import { Provider } from 'react-redux';
import store from './store'

// Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddContact2 from './components/AddContacts';

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Provider store={store}>
          <Router>
            <Header branding='Contact Manager'/>
            <Switch>
                <Route exact path="/" component={Contacts}/>
                <Route exact path="/addcontact" component={AddContact2}/>
              </Switch>
          </Router>
        </Provider>
        </React.Fragment>
    )
  };
  
}

export default App;
