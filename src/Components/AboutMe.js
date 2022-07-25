import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'


import toddprofile from "../portfolio/todd_profile.jpg"

import { Box } from '@mui/material'

const AboutMe = () => { 
  return (
     
    <Box 
      maxWidth="100%"
      display="flex"
      justifyContent="center" 
      alignItems="center">

        <Typography
          variant="h4"
          component="div" 
          fontFamily="MainFont4">
          About Me 
        </Typography>

     
    </Box>
  )
}

export default AboutMe



