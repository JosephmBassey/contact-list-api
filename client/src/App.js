import React from 'react';

import {
  Route,  Switch
} from 'react-router-dom'
import NavBar from './components/NavBar';
import ContactForm from './components/contactForm'
import Contact from './components/contact';
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/' component={ContactForm} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
