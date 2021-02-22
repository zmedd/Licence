
import React  from 'react';

import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import {Header} from './Header/Header';



function App() {
  return(
<Router>
  <Header />
  <Switch>
    <Route exact to='/'/>
    <Route exact path='/destinatii'/> 
    <Route exact path='/about' /> 
    <Route exact path='/faq'/>
    <Route exact path='/blog'/>
    <Route exact path='/contact'/>
  </Switch>
</Router>

  )
}


 


export default App;
