import artSculpture from '../portfolio/art_sculpture.JPG'
import artsplosure from '../portfolio/artsplosure.JPG'
import artsplosureBW from '../portfolio/artsplosureBW.JPG'
import bw_close_up_band from '../portfolio/bw_close_up_band.JPG'
import downtown_raleigh_skyline from '../portfolio/bw_close_up_band.JPG'
import roeVsWade from '../portfolio/roeVsWade.JPG'
import skate_park_biker from '../portfolio/skate_park_biker.JPG'
import train_tracks from '../portfolio/train_tracks.JPG'
import water_reflection from '../portfolio/water_reflection.JPG'



import CloseIcon from '@mui/icons-material/Close'
import React, {useState} from 'react'
import '../gallery.css'
import { CardMedia, Grid, Box, Card, CardActionArea, Button, Stack } from '@mui/material'
import PhotoDisplay from './PhotoDisplay'
import { SettingsInputHdmiSharp } from '@mui/icons-material'
import TDButton from './TDButtons'


const data = [
  {
    id: 1,
    imgSrc: artSculpture,
    alt: 'scultpure',
  },
  {
    id: 2,
    imgSrc: artsplosure,
    alt: 'band',
  },
  {
    id: 3,
    imgSrc: artsplosureBW,
  },
  {
    id: 4,
    imgSrc: bw_close_up_band,
  },
  {
    id: 5,
    imgSrc: downtown_raleigh_skyline,
  },
  {
    id: 6,
    imgSrc: roeVsWade,
  },
  {
    id: 7,
    imgSrc: skate_park_biker,
  },
  {
    id: 8,
    imgSrc: train_tracks,
  },
  {
    id: 9,
    imgSrc: water_reflection,
  },
]


const Gallery = () => {


  /* 
    Purpose: 
      this hook takes care of the image that's clicked
      and pass it to PhotoDisplay Component

    DataType: 
      if(empty) -> null, BlobImage
  */
  const [ currentImage, setCurrentImage ] = useState(null)

  /* 
    Purpose: 
      this hook defines the status of the PhotoDisplay Component 

    DataType: 
      Boolean -> true (if photodisplay is open), false( if photodisplay is closed)
  */

  const [ photoDisplayStatus, setPhotoDisplayStatus ] = useState(false) 


  /**
   * Purpose: 
        this function handles the status of the PhotoDisplay Component
    * 
    */

  const handlePhotoDisplay = () => { 
    setPhotoDisplayStatus(!photoDisplayStatus)
  }

    

    return (
     
      <Box>
           <Grid 
              sx={{ mb: 10, Width: "100vh" }}
              container 
              spacing={{ xs: 2, md: 0, lg: 0}}
              columns={{ xs: 1, sm: 0, md: 10 }}
              display="flex"
              justifyContent="center"
              alignItems="center">
                  
              {data.map(( card, key ) => ( 
                  <Grid 
                      item 
                      xs={2}
                      md={3} 
                      key={key}>

                        <Card
                          onClick={() => { 
                            handlePhotoDisplay(card)
                            setCurrentImage(card)
                          }}>

                          <Stack 
                            direction="column"
                            spacing={1}
                            justifyContent="center"
                            alignItems="center"
                            display="flex">

                            <CardMedia
                              sx={{ 
                                width: '100%',
                                height: '100%', 
                                cursor: 'pointer'
                              }}
                              component="img"
                              src={card.imgSrc}
                              />

                              


                          </Stack>

                           

                        </Card>

                  </Grid>
              ))}

            </Grid>

            <PhotoDisplay 
              status={photoDisplayStatus} 
              handler={handlePhotoDisplay} 
              data={currentImage}/>


      </Box>
    )

}


export default Gallery