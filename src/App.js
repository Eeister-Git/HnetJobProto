import './App.css';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


import Home from "./pages/Home"
import JobPage from './pages/JobPage';
import Manage from './pages/Manage';
import About from './pages/About';

class App extends React.Component{
  render (){
    return(<Router>
      <Switch>
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/about" component={About}/>
        <Route exact path = "/jobs" component={JobPage}/>
        <Route exaxt path = "/manage" component={Manage}/>
      </Switch>
    </Router>);
  }
}

export default App;