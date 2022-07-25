import React from 'react' 

import { Button } from '@mui/material' 
import { Link } from 'react-router-dom'


const TDButton = ({ text,  variant, onClick, destination }) => { 

    return ( 
        <Button 
            component={Link}
            to={destination}
            variant={variant}
            sx={{ 
                color: '#000000',
                fontSize: '1rem',
                fontFamily: 'MainFont4' ,
            }}
            onClick={onClick}

        >
            {text}

        </Button>
    )

}

export default TDButton 
