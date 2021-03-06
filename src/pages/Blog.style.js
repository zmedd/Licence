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
    vertical-align: baseline;
    font-family: 'Montserrat', sans-serif;;
}
`;

export const Paragraph = styled.p`
font-family:inherit;
line-height:1.5rem;

`;
export const Col = styled.div`
width:50%;
margin:auto;

`;

export const Row = styled.div`
margin: 0 auto;


`;

export const Delimitation = styled.div`
border:0.2px dotted black ;


`;
export const Img = styled.img`
max-width: 100%;
 height: auto;
border-radius:0.3rem;
transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
&::after{
  transform: scale(2);
  cursor: zoom-out;
}
`;

export const Title = styled.h1`
text-align:center;
font-size:2rem;
margin-top:3rem;
bottom:2rem;
font-family: 'Noto Sans JP', sans-serif;
color: ${color.black};

`;