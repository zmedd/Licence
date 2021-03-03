import React  from 'react';
import NavBar from './Navbar/NavBar';
import HomePage from './pages/HomePage'
import  AboutUs from './pages/AboutUs';
import Destination from './pages/Destination';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Footer from './Footer/Footer';
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
   <Route exact path='/signup' component={SignUp} />
   {/* nu functioneaza signUp */}
  </Switch>

<Footer />
 </Router>

  


  )
}


 



export default App;
