import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About'
import Contact from './components/pages/Contact';
import Impressum from './components/Impressum';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/Impressum' component={Impressum} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
