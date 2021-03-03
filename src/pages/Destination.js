import React from 'react';
import {Container,Col,Img,Row} from './Destination.style';
import italy from '../images/italy.jpg';
import germany from '../images/germany.jpg';
import romania from '../images/romania.jpg';
import hungary from '../images/hungary.jpg';




 
const Destination = () => {
    return(
        <div>
        <h1>Destination</h1>
        
        <Container >

<Row>
<Img src={italy} />
<Img src={germany} />
<Img src={hungary} />
<Img src={romania} />
<Img src={romania} />


</Row>







        </Container>
        </div>
    );
}



export default Destination;