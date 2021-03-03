import React from 'react';
import { Container,Title,Column,Row } from '../Footer/Footer.style';

import { FaGithub, FaInstagram ,FaFacebookF,FaLinkedin } from 'react-icons/fa';



const Footer = () => {
    return(
        <div>
            <Container>

            <Row>
            
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
                    <a href="https://github.com/victoria27199">
                    <FaGithub  className='github'/>
                    </a>
                </Row>
                <Row>
                <a href="https://www.instagram.com/v.99271/">
                    <FaInstagram className='instagram'/>
                    </a>
                </Row>
                <Row>
                <a href="#">
                   <FaFacebookF  className='fecebook'/>
                   </a>
                </Row>
                <Row>
                <a href="https://www.linkedin.com/in/s%C4%83r%C4%83teanu-victoria-591188207/">
                   <FaLinkedin  className='linkedin'/>
                   </a>
                </Row>
              
                </Column>
            </Row>


            </Container>
         
         
         </div>
    );
}


export default Footer;