import styled from 'styled-components';
import {color} from '../environment/colors';

export const   Container = styled.div`
background-color: ${color.yellow};
margin:0;

@media (max-width: 600px) {
    background-color:red;

}
`;

export const ContentFooter = styled.div`

`;

export const Title = styled.h1`
text-align:center;
`;


export const Row = styled.div`
display:flex;
border:1px solid blue;

`;
export const Column = styled.div`
display:flex;
text-align:center;flex-wrap:wrap;

`;