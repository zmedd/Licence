import React from 'react';
import { Container,Row,Title } from '../Footer/Footer.style';
import { FaGithub, FaInstagram ,FaFacebookF,FaLinkedin } from 'react-icons/fa';
import '../style.css';



const Footer = () => {
    return(
        <div>
            <Container>


<Row>
   <a href='/'>Home</a>
   <a href='/destination'>Destination</a>
   <a href='/about'>About Us</a>
   <a href='/blog'>Blog</a>
   <a href='/contact'>Contact</a>
</Row>

<Title>Social</Title>
<Row>
<a href="https://github.com/victoria27199">
<FaGithub  className='github'/>
    </a>
    <a href="https://www.instagram.com/v.99271/">
                    <FaInstagram className='instagram'/>
                    </a>
                    <a href="#">
                   <FaFacebookF  className='fecebook'/>
                   </a>
                   <a href="https://www.linkedin.com/in/s%C4%83r%C4%83teanu-victoria-591188207/">
                   <FaLinkedin  className='linkedin'/>
                   </a>
</Row>
            </Container>
         </div>
    );
}


export default Footer;