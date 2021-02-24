import React from 'react';
import NavBar from '../Navbar/NavBar';
import video from '../videos/video.mp4';

const HomePage = () => {
    return(
        <div>
        <h1>HomePage</h1>
     <video autoPlay  loop >
         <source src={video} type="video/mp4" />
     </video>
        </div>
    );
}


export default HomePage;