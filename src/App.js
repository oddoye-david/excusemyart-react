import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './pages/Home';
import ImageDetail from './pages/ImageDetail';
import ImageList from './pages/ImageList';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/images' component={ImageList}></Route>
          <Route path='/image/:id' component={ImageDetail}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
