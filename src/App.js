
import React  from 'react';
import HomePage from './pages/HomePage';
import Blog from './pages/Blog';
import Destination from './pages/Destination';
import Contact from './pages/Contact';
import {BrowserRouter as Router ,Link, Switch, Route} from 'react-router-dom';


function App() {
  return(

  <Router>
<Link to="/"> Acasa </Link>
 <Link to='/blog'> Blog</Link>
<Link to='/destination'> Destination </Link>
<Link to='/contact'> Contact </Link> 

<Switch>
<Route exact path='/' component={HomePage} />
 <Route path='/blog' component={Blog} />
 <Route path='/destination' component={Destination} />
 <Route path='/contact' component={Contact} />


</Switch> 

</Router>

  )
}


 


export default App;
