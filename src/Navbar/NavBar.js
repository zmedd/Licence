import React from 'react';
import { MenuItems} from './ItemsNavBar';
import {NavBarStyle} from './NavBar.style';



export const NavBar = () =>{
    return(
        <NavBarStyle>
   <div >
       <nav className="Navbar">
<ul>
   
    {MenuItems.map ( (item , index) =>{
return(
   
    <li key={index} >
      
    <a className={item.className} href={item.url}>
        {item.title }
       
          </a>
</li>
)
    })}
 
   
</ul>
       </nav>

      
   </div> 
   </NavBarStyle>
    );
}
export default NavBar;