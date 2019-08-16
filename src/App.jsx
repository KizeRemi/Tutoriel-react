import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './containers/HomePage';
import NavBar from './components/NavBar';
import JoinPage from './containers/JoinPage';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/join" component={JoinPage} />
      </Switch>
    </BrowserRouter>
  )
};

export default App;
