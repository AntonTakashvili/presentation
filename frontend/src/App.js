import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/mainPage/';
import RegisterPage from './pages/registerPage/';
import LoginPage from './pages/loginPage/';
import TodosPage from './pages/todosPage/';
import NotFoundPage from './pages/notFoundPage/';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/todos" component={TodosPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
