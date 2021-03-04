import React from 'react';
import { Container, Delimitation, Img, Col,Row,Paragraph, Title } from './Blog.style';
import italy from '../images/italy.jpg';
import handy from '../images/HandyZirkel-award.jpg'


  


const Blog = () => {
     return(
        <div>
        <Container>
          
          <Row>
          <Title>5 orașe ale viitorului</Title>
            <h2>Scriitor</h2>
<Col>
<Img src={italy}  onClick/>
</Col>
<Col>
Închideți ochii, trageți aer în piept și imaginați-vă că explorați un oraș al viitorului. Ce se întâmplă în jurul vostru? Tehnologie sau back to basics? Ce se aude? Care este culoarea predominantă? Verde de la parcuri sau gri de la mașini zburătoare și roboți?
Dacă imaginația nu v-a ajutat suficient și aveți nevoie de ceva inspirație, haideți să ne uităm la câteva proiecte și viziuni actuale propuse pentru orașele viitorului. Ne va îndruma în această călătorie Diana Stafie, consultant Foresight și co-fondator Future Station, o agenție care ajută business-urile să înțeleagă cum se pot adapta pentru succes în funcție de cum arată viitorul, înainte ca acesta să le ia prin surprindere.
”Specializându-mă în Foresight (Trends Scanning, Scenario Planning, Alternative Futures), urmăresc toate aceste inițiative, inovații, viziuni și planuri de viitor întrucât analiza lor ne poate oferi indicii privind dorințele și nevoile consumatorului de mâine, cum vor dori aceștia să trăiască, să călătorească, ce își vor dori să consume. Înțelegându-le, putem anticipa mai ușor noile moduri în care nevoile umane vor putea fi satisfăcute, nivelul de inovație tehnologică și implicit posibilele oportunități asociate,” spune Diana.</Col>

          </Row>
           
          <Delimitation />

        
          <Row>
          <Title>Mobiteam’s Project Handyzirkel receives Elevate Hope Golden Award</Title>
<Col>
<h2>DAN IRAȘCU <data>FEB 20</data> </h2> 
<Img src={handy}  onClick/>
</Col>
<Col>
<Paragraph>Just like always, we the Mobiteam crew are happy to work with our partners and provide high-end digital features for web or app software. Either it’s about design, development, or marketing our projects are delivered in the best possible shape and, as it seems, the final products are eligible for awards. This time, our partner […]</Paragraph>
</Col>
          </Row>




        </Container>
         </div>
     );
 }



export default Blog;