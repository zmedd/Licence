import styled from 'styled-components';
import {color} from '../environment/colors';

// Navbar, div, nav si ul trebuie sa aiba width: 100%. Apoi, li sa aiba flex:1

export const NavBarStyle = styled.div`
  width: 100%;
background-color: ${color.blue};
font-weight: 400;
a{
  text-decoration:none;
  width:100%;
  color: ${color.yellow};
  font-size:2rem
}
ul,li{
  width:100%;
display:flex;
align-items:center;
justify-content:center;
color: ${color.yellow};
}

`;
