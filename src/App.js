import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainFront from './componets/MainFront/MainFront';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TransactionFullList from './componets/Transaction/TransactionFullList';
import BlockFullList from './componets/Block/BlockFullList';

class App extends Component {
  render() {
    return (
      <Router>
         <Route exact path="/" component={MainFront} />
         <Route path="/txlist" component={TransactionFullList} />
         <Route path="/blocklist" component={BlockFullList} />
      </Router>    
    );
  }
}

export default App;
