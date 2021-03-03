import styled from 'styled-components';
import {color} from '../environment/colors';

export const   Container = styled.div`
background-color: ${color.blue};

margin-top:2rem;
color: white;
  position: relative;
  z-index: 3;
  
 .github{
     font-size:2rem;
 }
 .instagram{
     font-size:2rem;
    margin-top:0.5rem;
 }
 .fecebook{
    font-size:2rem;
    margin-top:0.5rem; 
 }
 .linkedin{
    font-size:2rem;
    margin-top:0.5rem; 
 }
`;

export const ContentFooter = styled.div`

`;

export const Title = styled.h1`
text-align:center;
`;


export const Row = styled.div`
display:flex;
flex-wrap:wrap;

`;

export const Column = styled.div`
width:50%;
text-align:center;
align-items:center;

`;
