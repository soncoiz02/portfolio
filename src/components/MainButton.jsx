import { Button } from '@mui/material'
import React from 'react'

const MainButton = ({ colorType, children, ...other }) => {
    return (
        <Button
            variant='contained'
            color={colorType}
            sx={{
                borderRadius: '10px',
                boxShadow: 'none',
                ':hover': {
                    background: (theme) => theme.palette[colorType].main,
                    boxShadow: (theme) => `0 5px 20px ${theme.palette[colorType].light}`
                },
                ...other?.customStyle
            }}
            {...other}
        >
            {children}
        </Button>
    )
}

export default MainButton