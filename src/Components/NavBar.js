import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


import TDButton from './TDButtons'
import { Link, Route, Routes } from 'react-router-dom'


import Gallery from './Gallery'
import AboutMe from './AboutMe'
import Welcome from './Welcome'
import ContactUs from './ContactUs'

export default function TDNavBar() {
  return (

    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          style={{  
            backgroundColor: '#ffffff',
            boxShadow: 0, 
            top: 0, 
            }}>


          <Toolbar>
          

            <IconButton
              
              size="large"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 , display: { sm: 'flex', md: 'none'}, color: '#000'}}
            >

              <MenuIcon />
            </IconButton>

            

               <TDButton  destination={"/"}
                  text="Home"
                  variant="text"/>


                <Box sx={{ flexGrow: 1}}/>


                <TDButton destination={"/gallery"}
                  text="Gallery"
                  variant="text"/>

                <TDButton  destination={"aboutme"}
                  text="About Me"
                  variant="text"/>

                <TDButton  destination={"/contactus"}
                  text="Contact"
                  variant="text"/>
                
                <IconButton
                  size="large"
                  color="inherit"
                  href="https://www.instagram.com/todd_s.carter/"
                  aria-label="Instagram"
                  sx={{ mr: 2 , display: { sm: 'flex', md: 'flex'}, color: '#000'}}
                >
                  <InstagramIcon/>
                </IconButton>
                
                <IconButton
                  size="large"
                  color="inherit"
                  href="https://www.twitter.com/ToddS_Carter/"
                  aria-label="Instagram"
                  sx={{ mr: 2 , display: { sm: 'flex', md: 'flex'}, color: '#000'}}
                >
                  <TwitterIcon/>
                </IconButton>

          </Toolbar>

        
        </AppBar>

      </Box>


      <Box 
          mt={{sm: 10, md: 12}}
          maxWidth="100%"
          display="flex"
          justifyContent="center" 
          alignItems="center">

          <Routes>
              <Route exact path="/" element={<Welcome/>}/>
              <Route path="/gallery" element={<Gallery/>}/>
              <Route path="/aboutme" element={<AboutMe/>}/>
              <Route path="/contactus" element={<ContactUs/>}/>
          </Routes>


      </Box>

    </Box>


  )
}

