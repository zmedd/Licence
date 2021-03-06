import React from 'react';
import video from '../videos/video.mp4';
import { Button, Video } from './HomePage.style';




const HomePage = () => {
    return(
     
        
        <div>
        <h1>HomePageee</h1>
   
        <Button>Ceva</Button>
       
    <Video  autoPlay loop > 
        <div className='Cevaa'>
            <p>Salut</p>
    <Button>Ceva</Button>
    
    </div>
         <source src={video} type="video/mp4" className="video"  /> 
     </Video> 
  
        </div>
        
    );
}



export default HomePage;