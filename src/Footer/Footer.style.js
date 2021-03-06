import styled from 'styled-components';
import {color} from '../environment/colors';

export const   Container = styled.div`
background-color: ${color.blue};
color:${color.yellow};
a{
   text-decoration:none;
   padding:1rem;
}
 .github{
   font-size:2rem;
    margin-top:2rem; 
    
 }
 .instagram{
   font-size:2rem;
    margin-top:2rem; 
 }
 .fecebook{
   font-size:2rem;
    margin-top:2rem; 
 }
 .linkedin{
    font-size:2rem;
    margin-top:2rem; 
 }
`;
export const Title = styled.div`
justify-content:center;
text-align:center;
align-items:center;

`;
export const Row = styled.div`
 width:100%;
display:flex;
text-transform:uppercase;
justify-content:center;
text-align:center;
align-items:center;


`;
