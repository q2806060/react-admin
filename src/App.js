import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'; // HashRouter
import './App.css';
//引用组件
import Home from './views/Home';
import About from './views/About';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={About} path="/about" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
