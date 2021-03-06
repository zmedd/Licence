import React from 'react';
import { Container,Title, Img,Section, Paragraph,Delimit,Row,Col } from './AboutUs.style';
import travel from '../images/travel.jpg';
import Dan from '../images/Dan.jpg';
import Ana from '../images/Ana.jpg';
import Alin from '../images/Alin.jpg';
import Maria from '../images/Maria.jpg';
import  tur from'../images/tur.jpg';

export const AboutUs = () =>{
    return(
        <div>
         <Container >


<Title>History</Title>
<p>continultuk</p>
<Img  src={travel} />
<Paragraph>
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

</Paragraph>


<Delimit />
           <Title>ceva despre</Title>  
<Row>
    <Col><Img src={tur} /></Col>
    <Col>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit adipiscing bibendum est ultricies integer. Sed cras ornare arcu dui vivamus. Mi proin sed libero enim. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Nam libero justo laoreet sit. Curabitur vitae nunc sed velit dignissim sodales ut eu. Duis ultricies lacus sed turpis tincidunt id aliquet. Ut aliquam purus sit amet luctus. Blandit cursus risus at ultrices. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Ac auctor augue mauris augue. Sed augue lacus viverra vitae congue eu consequat ac. Turpis massa tincidunt dui ut ornare lectus sit. Dolor sed viverra ipsum nunc aliquet. Diam vel quam elementum pulvinar. In nisl nisi scelerisque eu ultrices vitae auctor.

Cras adipiscing enim eu turpis egestas pretium aenean. Nisi lacus sed viverra tellus in hac habitasse platea. Egestas integer eget aliquet nibh. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. Mauris nunc congue nisi vitae suscipit tellus mauris a. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Natoque penatibus et magnis dis parturient montes nascetur. Orci ac auctor augue mauris augue neque gravida in fermentum. Ac placerat vestibulum lectus mauris ultrices. Ut ornare lectus sit amet est placerat in. Elementum nibh tellus molestie nunc non blandit massa. Duis tristique sollicitudin nibh sit amet. Felis eget nunc lobortis mattis aliquam faucibus purus. Amet commodo nulla facilisi nullam vehicula ipsum. Euismod in pellentesque massa placerat. Risus ultricies tristique nulla aliquet enim tortor at auctor. Sagittis id consectetur purus ut faucibus pulvinar elementum integer.
    </Col>
</Row>
<Row>
    <Col>In the winter of 2011, while serving as working members at ADX, Portland’s Makerspace, Zach and Josh met and became friends, sharing a love of art, punk, and burritos. With the help of their friends at ADX, they formed Band, a diverse, draw-it-by-hand, make-it-from-scratch, do-it-together creative studio, in a room they built above the shop’s kitchen.

In the years since, Band has worked on a wide array of unique projects with some of the best people from the Pacific Northwest and beyond. We strive to keep our work unique and smart, with room for a little magic. You can find us anywhere, and if the project is the right fit, we’d love to work with you. Feel free to drop us a line, here.</Col>
    <Col><Img  src={tur} /></Col>
</Row>

<Delimit />
<Title>Team</Title>

<Row>
<Col>
    <Img src={Ana} />
   <h3>Team Leader</h3>
   <p>Victoria Sarateanu</p>
    </Col>
    <Col>
    <Img src={Dan} />
   <h3>Team Marketing</h3>
   <p>Dan Irascu</p>
    </Col>
   
    <Col>
    <Img src={Alin} />
   <h3>CTO</h3>
   <p>Alin Sirbu</p>
    </Col>
    <Col>
    <Img src={Maria} />
   <h3>Operator Call Center</h3>
   <p>Maria Olaru</p>
    </Col>
   
</Row>

<Delimit />
            
         </Container>
        </div>
    )
}
export default AboutUs;