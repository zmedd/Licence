import React from 'react';
import video from '../videos/video.mp4';
import { Button, Video ,Container, Section } from './HomePage.style';




const HomePage = () => {
    return(
  <Container>
  <div>
       
       
       <Video  autoPlay  muted loop > 
       <div>
       <Section className="section">
<h2>Bun venit!</h2>
</Section>
       </div>
         
            <source src={video} type="video/mp4" className="video"  /> 
        </Video> 
     
           </div>

  </Container>

    );
}




export default HomePage;