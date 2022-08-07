import { Carousel } from 'react-carousel-minimal';
import { Box, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import Services from './Services'



import artSculpture from '../portfolio/art_sculpture.JPG'
import downtown_raleigh_skyline from '../portfolio/downtown_raleigh_skyline.JPG'
import roeVsWade from '../portfolio/roeVsWade.JPG'
import skate_park_biker from '../portfolio/skate_park_biker.JPG'
import train_tracks from '../portfolio/train_tracks.JPG'

function Welcome() {
  const data = [
     {
      image: roeVsWade,
      caption: "Roe vs Wade"
      },
      {
      image: artSculpture,
      caption: "Band"
      },
      {
      image: train_tracks,
      caption: "Train"
      },
      {
      image: downtown_raleigh_skyline,
      caption: "Raleigh Downtown"
      },
      {
      image: skate_park_biker,
      caption: "Skate Park"
      }
      ];
 
   const captionStyle = {
     fontSize: '2em',
     fontWeight: 'bold',
   }
   const slideNumberStyle = {
     fontSize: '20px',
     fontWeight: 'bold',
   }
   return (
     <div className="App">
       <div style={{ textAlign: "center" }}>
         <h2>React Carousel Minimal</h2>
         <p>Easy to use, responsive and customizable carousel component for React Projects.</p>
         <div style={{
           padding: "0 20px"
         }}>
           <Carousel
             data={data}
             time={2000}
             width="850px"
             height="500px"
             captionStyle={captionStyle}
             radius="10px"
             slideNumber={true}
             slideNumberStyle={slideNumberStyle}
             captionPosition="bottom"
             automatic={true}
             dots={true}
             pauseIconColor="white"
             pauseIconSize="40px"
             slideBackgroundColor="darkgrey"
             slideImageFit="cover"
             thumbnails={true}
             thumbnailWidth="100px"
             style={{
               textAlign: "center",
               maxWidth: "850px",
               maxHeight: "500px",
               margin: "40px auto",
             }}
           />
         </div>
         <br />
         <br />
        <Services />
       </div>
     </div>
   );
 }

export default Welcome;
