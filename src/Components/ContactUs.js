
import React, { useState } from 'react' 

import { Box, Typography, Stack, TextField, Button, Paper } from '@mui/material'

const ContactUs  = () => {


  const [status, setStatus] = useState("Submit")


  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("Sending...")
    const { name, email, message } = e.target.elements
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    }

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/jsoncharset=utf-8",
      },
      body: JSON.stringify(details),
    })
    setStatus("Submit")
    let result = await response.json()
    alert(result.status)
  }


    return (
      //Create a form where the user can click what type event they want a photo for
      <Box 
        justifyContent={"center"}
        alignItems={"center"}
        display="flex">
       

  
        <Paper 
          elevation={2}
          sx={{ 
              width: {xs: '100%', sm: '100%', md: '50rem'}, 
              height: {xs: '100%', sm: '100%', md:'80vh'},
              backgroundColor: '#f2f2f2'
              }}>

            <form onSubmit={handleSubmit}>

              <Stack 
                mt={5}
                direction="column"
                spacing={2}
                justifyContent="center"
                alignItems="center" 
                display="flex">

                <Typography
                  variant="h4"
                  component="div"
                  fontFamily="Modern"
                  >
                    Contact Us 
                    
                </Typography>

                <TextField
                  variant="outlined"
                  id="name"            
                  label="Name"
                  required
                  size="small"
                  sx={{ fontSize: '1rem', width: '50%'}}
                />


                <TextField
                  variant="outlined"
                  id="email"
                  label="Email"
                  required
                  size="small"
                  sx={{ fontSize: '1rem', width: '50%'}}

                />
                

              
                <TextField

                  variant="outlined"
                  id="message"
                  label="Message"
                  required
                  size="normal"
                  multiline
                  minRows={4}
                  sx={{ fontSize: '1rem', width: '50%'}}

                />


                <Button 
                  variant="outlined"
                  >
                    Submit 
                  </Button>

              </Stack>

            </form>

        </Paper>

      </Box>
    )
  }
  
export default ContactUs 
  
