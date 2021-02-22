import React from 'react';
import { AboutUs } from '../pages/AboutUs';
import {Link} from './Header.style';




export const Header = () =>{
    return(
   <div >
<Link to='/' >Acasa</Link>
<Link to='/deatinatii' >Destinatii</Link>
<Link to='/about'  >Despre noi</Link>
<Link to='/faq' >FAQ</Link>
<Link to='/blog' >Blog</Link>
<Link to='/contact' >Contact</Link>

   </div> 
    );
}