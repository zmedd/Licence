import React from 'react';
import video from '../videos/video.mp4';
import { Button, Video ,Container, Section } from './HomePage.style';




const HomePage = () => {
    return(
  <Container>
  <div>
       
       
       <Video  autoPlay  muted loop > 
            <source src={video} type="video/mp4" className="video"  /> 
            <Section className="section">
       ceva text
       <Button>Btn</Button>
</Section>
        </Video> 
        
       
      
           </div>

  </Container>

    );
}




export default HomePage;