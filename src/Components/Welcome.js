
import React from 'react' 

import { Box, Typography } from '@mui/material'

const Welcome  = () => { 
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
                Welcome page 
          </Typography>
  
       
      </Box>
    )
  }
  
export default Welcome 
  