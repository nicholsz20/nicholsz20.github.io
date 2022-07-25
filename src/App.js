import './App.css';
import NavBar from './Components/NavBar'
import AboutMe from './Components/AboutMe'
import Gallery from './Components/Gallery'

import { Box, Stack } from '@mui/material'
import { BrowserRouter } from 'react-router-dom' 




const App = () => {

  return (
    <BrowserRouter>

        <Box
          maxWidth="100%"
          display="flex"
          justifyContent="center" 
          alignItems="center"> 


          <Stack 
            direction="column"
            spacing={0} 
            justifyContent="center" 
            alignItems="center">

              <NavBar />

          </Stack>

          
        </Box>

    </BrowserRouter>
    

  )
}

export default App
