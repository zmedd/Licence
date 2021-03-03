import styled from 'styled-components';
import { color } from '../environment/colors';

export const Container = styled.div`
width:100%;
background-color:${color.grey};
#more{
    display:none;

}

`;

export const Paragraph = styled.p`
font-family:sans-serif;
`;
export const Col = styled.div`
width:50%;
display:inline;
`;

export const Row = styled.div`
width:100%;
`;

export const Delimitation = styled.div`
border:1px dotted black ;
margin:0 auto;

`;
export const Img = styled.img`
width:450px;
height:450px;
padding:1rem;
`;

export const Title = styled.h1`
text-align:center;

`;