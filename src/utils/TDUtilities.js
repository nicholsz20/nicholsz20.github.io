import React from 'react'

import Slide from '@mui/material/Slide'

const TDTransition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

export { 

    TDTransition, 

}