import React from 'react';
import {BrowserRouter as Router,Switch,Route
} from 'react-router-dom'


import {
  Home,
  About,
  FAQ,
  Error,
  Person
} from './pages';

import {
  Navbar,
  Footer,
  Sidebar

} from './components';


function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>

        <Route  path='/about'>
          <About/>
        </Route>

        <Route  path='/person'>
          <Person/>
        </Route>

        <Route  path='/faq'>
          <FAQ/>
        </Route>

        <Route exact path='*'>
          <Error/>
        </Route>
        
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App;

