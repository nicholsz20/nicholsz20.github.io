import { Carousel } from 'react-carousel-minimal';
import { Box, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'



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
      maxWidth={"80%"}
      justifyContent={"center"}
      alignItems={"center"}>

      <Typography
        variant="h4"
        className="Welcome Title" 
        fontFamily="MainFont4"
        style={{ textAlign: "center" }}
      >
          Welcome To My Site
      </Typography>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="500px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            fontFamily="MainFont4"
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
              width: "auto",
              height: "500px",
              margin: "auto",
            }}
          />
        </div>
    </Box>
  );
}

export default Welcome;
