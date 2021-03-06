import React from 'react';
import { Container, Delimitation, Img, Col,Row,Paragraph, Title } from './Blog.style';
import italy from '../images/italy.jpg';
import handy from '../images/HandyZirkel-award.jpg';
import mobi from '../images/Mobiteam.jpg';
import marketing from '../images/marketing.jpg';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


function click() {
  <Route>
  <Redirect to='/destination'/>

  </Route>
}

const Blog = () => {
     return(
        <div>
        <Container>
          
    
        
          <Row>
          <Title>Mobiteam’s Project Handyzirkel receives Elevate Hope Golden Award</Title>
<Col>
<h2>DAN IRAȘCU <data>FEB 20</data> </h2> 
<Img src={mobi} />
</Col>
<Col>
<Paragraph>The development industry has grown exponentially over the years. More companies and organizations are looking to expand their horizon on the internet and on the mobile ecosystem. The demand surge has also caused an influx in the number of development agencies not just here in Berlin, but all around the world. When deciding on a […]</Paragraph>
</Col>
          </Row>
        <Delimitation/>
          <Row>
          <Title>Mobiteam’s Project Handyzirkel receives Elevate Hope Golden Award</Title>
<Col>
<h2>DAN IRAȘCU <data>FEB 20</data> </h2> 
<Img src={marketing} />
</Col>
<Col>
<Paragraph>A strategic marketing planning process is extremely important for companies who want to reach current and potential customers in a meaningful way. There is an ever-expanding number of digital channels and marketing technologies available. This omnichannel opportunity calls for processes that can be monitored and adjusted to keep up as customer preferences change and evolve. […]</Paragraph>
</Col>
          </Row>
          <Delimitation/>
          <Row>
          <Title>Mobiteam’s Project Handyzirkel receives Elevate Hope Golden Award</Title>
<Col>
<h2>DAN IRAȘCU <data>FEB 20</data> </h2> 
<Img src={handy}  />

</Col>
<Col>
<Paragraph>Just like always, we the Mobiteam crew are happy to work with our partners and provide high-end digital features for web or app software. Either it’s about design, development, or marketing our projects are delivered in the best possible shape and, as it seems, the final products are eligible for awards. This time, our partner […]
<button onClick={click}>Hai</button>
</Paragraph>

</Col>
          </Row>




        </Container>
         </div>
     );
 }



export default Blog;