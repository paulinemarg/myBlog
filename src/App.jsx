import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About'
import Contact from './components/pages/Contact';
import Impressum from './components/Impressum';
import Tech from './components/pages/Tech';
import Dev from './components/pages/Dev';
import Motive from './components/pages/Motive';
import Design from './components/pages/Design';
import Books from './components/pages/Books';
import Interview from './components/pages/Interview';
import Read from './components/pages/Read';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/impressum' component={Impressum} />
          <Route path='/tech' component={Tech} />
          <Route path='/dev' component={Dev} />
          <Route path='/motive' component={Motive} />
          <Route path='/design' component={Design} />
          <Route path='/books' component={Books} />
          <Route path='/interview' component={Interview} />
          <Route path='/read' component={Read} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
