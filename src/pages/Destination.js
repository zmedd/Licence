import React from 'react';
import {Container,Col,Img} from './Destination.style';
import italy from '../images/italy.jpg';
import germany from '../images/germany.jpg';
import romania from '../images/romania.jpg';
import hungary from '../images/hungary.jpg';



 

const Destination = () => {
    return(
        <div>
        <h1>Destination</h1>
        <Container >
<Col>
<Img 
src={italy} />
<Img src={germany} />
<Img src={hungary} />


</Col>




        </Container>
        </div>
    );
}



export default Destination;