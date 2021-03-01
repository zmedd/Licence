import React from 'react';
import { Container,Title,Column,Row } from '../Footer/Footer.style';

import { FaGithub, FaInstagram ,FaFacebookF } from 'react-icons/fa';



const Footer = () => {
    return(
        <div>
            <Container>

            <Row>
                <Column>
                <h1>Aceste</h1>
                <p>unu</p>
                </Column>
                <Column>
 
                <h3>Home</h3>
                <h3>Destination</h3>
                <h3>AboutUs</h3>
                <h3>Blog</h3>
                <h3>Contact</h3>
                <p>Sing Up</p>
                </Column>
                <Column>
                <Row>
                    <FaGithub  className='github'/>
                </Row>
                <Row>
                    <FaInstagram className='instagram'/>
                </Row>
                <Row>
                   <FaFacebookF  className='fecebook'/>
                </Row>
              
                </Column>
            </Row>


            </Container>
         
         
         </div>
    );
}


export default Footer;