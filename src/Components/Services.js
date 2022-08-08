import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Box, Typography, Stack } from '@mui/material'
import water_reflection from '../portfolio/water_reflection.JPG'



function Services() {
  return (
    <Box 
      maxWidth={"90%%"}
      justifyContent={"center"}
      alignItems={"left"}
      display="flex"
      >
    
    <Stack
        mt={10}
        direction={{ xs: 'column', sm: 'column', md: 'column'}}
        spacing={5}
        justifyContent="center"
        alignItems="center"
        display="flex"
        >
    <Typography
        variant="h5"
        fontFamily="MainFont4"
        htmlFor="name"
        align="Center"
    >
        Services
    </Typography>    

    <Stack
        mt={10}
        direction={{ xs: 'column', sm: 'column', md: 'row'}}
        spacing={5}
        justifyContent="center"
        alignItems="center"
        display="flex"
        >
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" imgSrc="water_reflection" />
      <Card.Body>
        <Card.Title>Food Photography</Card.Title>
        <Card.Text>
          Get the best shots of your food 
        </Card.Text>
        <Button variant="primary" href="http://localhost:3000/contactus">Contact Me</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" imgSrc="water_reflection" />
      <Card.Body>
        <Card.Title>Photography</Card.Title>
        <Card.Text>
          Get the best shots of your food 
        </Card.Text>
        <Button variant="primary" href="http://localhost:3000/contactus">Contact Me</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" imgSrc="water_reflection" />
      <Card.Body>
        <Card.Title>Photography</Card.Title>
        <Card.Text>
          Get the best shots of your food 
        </Card.Text>
        <Button variant="primary" href="http://localhost:3000/contactus">Contact Me</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" imgSrc="water_reflection" />
      <Card.Body>
        <Card.Title>Photography</Card.Title>
        <Card.Text>
          Get the best shots of your food 
        </Card.Text>
        <Button variant="primary" href="http://localhost:3000/contactus">Contact Me</Button>
      </Card.Body>
    </Card>
    </Stack>
    </Stack>
    </Box>
  );
}

export default Services;