import styled from 'styled-components';
import { color } from '../environment/colors';

export const Container = styled.div`
width:100%;
background-color:${color.grey};
*{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
`;

export const Paragraph = styled.p`
font-family:sans-serif;
`;
export const Col = styled.div`
width:50%;
margin:auto;

`;

export const Row = styled.div`
margin: 0 auto;


`;

export const Delimitation = styled.div`
border:1px dotted black ;
margin:0 auto;

`;
export const Img = styled.img`
max-width: 100%;
 height: auto;
border-radius:0.3rem;
transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

`;

export const Title = styled.h1`
text-align:center;
font-size:2rem;
margin-top:3rem;
bottom:2rem;
font-family: 'Noto Sans JP', sans-serif;
color: ${color.black};

`;