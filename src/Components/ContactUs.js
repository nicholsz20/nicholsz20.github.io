
import React, { useState } from 'react' 

import { Box, Typography, Stack, TextField, Button } from '@mui/material'

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
<<<<<<< HEAD
    }
    let response = await fetch("http://localhost:3000/contact", {
=======
    };
    let response = await fetch("http://localhost:5000/contact", {
>>>>>>> 2431299620e8056a44929a8efd9194e08a7d7939
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
<<<<<<< HEAD
        maxWidth={"80%"}
        justifyContent={"center"}
        alignItems={"center"}
        display="flex">
=======
      maxWidth={"80%"}
      justifyContent={"center"}
      alignItems={"center"}
      display="flex"
      >

>>>>>>> 2431299620e8056a44929a8efd9194e08a7d7939
  
      <Stack
        mt={10}
        direction={{ xs: 'column', sm: 'column', md: 'column'}}
        spacing={5}
        justifyContent="center"
        alignItems="center"
        display="flex"
        backgroundColor="darkgrey"
        >

        <Typography
            variant="h5"
            fontFamily="MainFont4"
            htmlFor="name"
            align="center"
        >
          Contact Us
        </Typography>

      <form onSubmit={handleSubmit}>
        <Stack
          direction="column"
        >
        <Typography
            variant="label"
            fontFamily="MainFont4"
            htmlFor="name"
            align="Center"

        >
          <TextField
            id="name"            
            label="Name"
            htmlFor="name"
            required
            size="small"
            style={{ width: 300}}
          />
        </Typography>
        <br />
        <Typography
            fontFamily="MainFont4"
            htmlFor="email"
            align="center"
        >
          <TextField
            id="email"
            label="Email"
            required
            size="small"
            style={{ width: 300}}
          />
        </Typography>
        <br />
        <Typography
            variant="label"
            fontFamily="MainFont4"
            htmlFor="message"
            align="center"
        >
          <TextField
            id="message"
            label="Message"
            required
            size="normal"
            multiline
            minRows={4}
            style={{ width: 300}}
          />
        </Typography>

        <Button
         type="submit"
         size="medium"
         varient="contained"
         >
           {status}
        </Button>
        </Stack>
      </form>
      </Stack>

      </Box>
    )
  }
  
export default ContactUs 
  
