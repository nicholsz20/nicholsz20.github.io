import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import "../aboutMe.css"


import toddprofile from "../portfolio/todd_profile.jpg"

import { Box } from '@mui/material'

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img
            src={toddprofile}
            alt=""
            className="about-img"
          />
        </div>
      </div>
      <div className="about-right">
        <Typography
            variant="h2"
            className="about-title" 
            fontFamily="MainFont4"
        >
                About Me 
        </Typography>
        <Typography
            variant="p"
            className="about-sub" 
            fontFamily="MainFont4"
        >
          It is a long established fact that a reader will be distracted by the
          readable content.
        </Typography>
        <br />
        <br />
        <Typography
            variant="p"
            className="about-desc" 
            fontFamily="MainFont4"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </Typography>
        </div>
      </div>
  );
};

export default About;



