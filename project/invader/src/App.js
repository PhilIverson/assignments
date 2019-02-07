import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Purchase from './components/Purchase';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details/:id" component={Details} />
          <Route path="/Purchase" component={Purchase} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>

    );
  }
}

export default App;
