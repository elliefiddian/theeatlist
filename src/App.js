

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';




import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contacts';
import Service from './Components/Pages/Service/Service';
import Navbar from './Components/Navbar/Navbars';



//move to other pages//
    const App = () => {
      return (
       <Router>
        <Navbar/>
        <main>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/about" exact>
              <About/>
            </Route>
            <Route path="/service" exact>
              <Service/>
            </Route>
            <Route path="/contact" exact>
              <Contact/>
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
       </Router>
      );
    }
    
    export default App;
    