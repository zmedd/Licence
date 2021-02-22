import React from 'react';

import {Link} from './Header.style';




export const Header = () =>{
    return(
   <div >
<Link to='/' >Acasa</Link>
<Link to='/deatinatii' >Destinatii</Link>
<Link to='/about'  >Despre noi</Link>
<Link to='/faq' >FAQ</Link>
<Link to='/blog' >Blog</Link>


   </div> 
    );
}