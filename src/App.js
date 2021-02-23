import React  from 'react';
import NavBar from './Navbar/NavBar';
import HomePage from './pages/HomePage'
import  AboutUs from './pages/AboutUs';
import Destination from './pages/Destination';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';

import {MenuItems} from './Navbar/ItemsNavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";







function App() {
  return(

 <Router>
   <NavBar/>
  <Switch>
   <Route exact path='/homepage' component={HomePage} />
   <Route exact path='/destination' component={Destination} />
   <Route exact path='/aboutus' component={AboutUs} />
   <Route exact path='/blog' component={Blog} />
   <Route exact path='/contact' component={Contact}/>
   <Route exact path='/signUp' component={SignUp}/>  
   {/* nu functioneaza signUp */}
  </Switch>

 </Router>

  


  )
}


 


export default App;
