import Navbar from '../components/Navbar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact />
      </Switch>
       </Router>
    </div>
  );
}

export default App;
