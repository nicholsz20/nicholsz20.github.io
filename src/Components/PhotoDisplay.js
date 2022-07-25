import React from 'react' 


import { Box, Stack, AppBar, Toolbar, IconButton, CardMedia } from '@mui/material'
import { Dialog, DialogContent, Typography } from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'

import { TDTransition } from '../utils/TDUtilities'


/**
 * 
 * Purpose: Display Image data 
 * 
 * Params: status -> if display of dialog is open | closed
           handler -> handles the open and close of the dialog
           data    -> data that is passed to be displayed
 */

const PhotoDisplay = ( { status, handler, data }) => { 
    

    return ( 
        
        <Dialog 
            fullScreen
            open={status}
            onClose={handler}
            TransitionComponent={TDTransition}>

        <AppBar sx={{ position: 'relative', backgroundColor: '#ffffff' }}>
          <Toolbar>


            <IconButton
             sx={{ 
                color: '#000'
             }}
              edge="start"
              color="inherit"
              onClick={handler}
              aria-label="close">
              <CloseIcon />
            </IconButton>


            <Typography sx={{ ml: 2, flex: 1, color: '#000', fontFamily: 'MainFont4'}} variant="h6" component="div">
              Photo Viewer 
            </Typography>

          </Toolbar>
        </AppBar>

        <DialogContent>

            {data && 
            <CardMedia
                sx={{
                    width: '100%', 
                    height: '100%'
                }}
                component="img"
                src={data.imgSrc}/>
            }


        </DialogContent>

        </Dialog>
    )
}

export default PhotoDisplay