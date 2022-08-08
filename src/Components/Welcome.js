import { Carousel } from 'react-carousel-minimal';
import { Box, Paper, Stack } from '@mui/material'
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
     <Box   
        mt={{xs: 10, sm: 10, md: -1}}
        justifyContent="center"
        alignItems="center"
        display="flex">

        <Stack 
          direction="column"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          display="flex">

          <Typography 
            variant="h4"
            component="div" 
            fontFamily="Modern">
                Todd's Photography
          </Typography>

         <Stack 
          direction="column"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          display="flex">

           <Carousel
             data={data}
             time={2000}
             width={{xs: '100%', sm: '100%', md: '100vh'}}
             height="30rem"
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
             thumbnailWidth="100px"/>
            

         
            <Services />
       </Stack>
       </Stack>
     </Box>
   )
 }

export default Welcome
