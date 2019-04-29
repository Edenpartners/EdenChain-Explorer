import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainFront from './componets/MainFront/MainFront';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TransactionFullList from './componets/Transaction/TransactionFullList';
import TransactionDetail from './componets/Detail/TransactionDetail';
import BlockFullList from './componets/Block/BlockFullList';
import BlockDetail from './componets/Detail/BlockDetail';
import TransactionUserList from './componets/Transaction/TransactionUserList';

class App extends Component {
  render() {
    return (
      <Router>
         <Route exact path="/" component={MainFront} />
         <Route path="/txlist" component={TransactionFullList} />
         <Route path="/blocklist" component={BlockFullList} />
         <Route path="/blockDetail/:block_height" component={BlockDetail} />
         <Route path="/txDetail/:tx_id" component={TransactionDetail} />
         <Route path="/txDetail/:tx_id" component={TransactionDetail} />
         <Route path="/txUserList/:keyword" component={TransactionUserList} />
      </Router>    
    );
  }
}

export default App;
