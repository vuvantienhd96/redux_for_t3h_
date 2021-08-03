import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Contact from './components/Contact';
import Contacts from './components/Contacts';

import Header from './components/Header';

import { Provider } from 'react-redux';
import store from './store'

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Provider store={store}>
          <Header branding='Contact Manager'/>
            <div className="container">
              <Contacts />
            </div>
        </Provider>
        </React.Fragment>
    )
  };
  
}

export default App;
