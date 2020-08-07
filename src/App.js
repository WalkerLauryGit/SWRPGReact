import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Heroes from './components/Heroes'
import Characters from './components/Characters'
import Planets from './components/Planets'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
     <Router>

      <Navbar/> 

      <Switch>
        <Route exact path="/" component={Heroes}/>
        <Route exact path="/planets" component={Planets}/>
        <Route exact path="/characters" component={Characters}/>
      </Switch>

     </Router>
    </div>
  );
}

export default App;
