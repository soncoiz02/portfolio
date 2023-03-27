import { Box, Stack, useTheme } from '@mui/material'
import React from 'react'

const DotLine = () => {
    const theme = useTheme()
    const dotStyle = {
        height: '8px',
        borderRadius: '50px',
        background: theme.palette.primary.main,
    }
    return (
        <Stack direction='row' alignItems='center' gap='0 10px' mt={3}>
            <Box sx={{
                ...dotStyle,
                width: {
                    xs: '100px',
                    md: '140px'
                }
            }} />
            <Box sx={{
                ...dotStyle,
                width: {
                    xs: '50px',
                    md: '80px'
                },
                ml: {
                    xs: '20px',
                    md: '35px'
                }
            }} />
            <Box sx={{
                ...dotStyle,
                width: {
                    xs: '20px',
                    md: '30px'
                },
                ml: {
                    xs: '20px',
                    md: '30px'
                }
            }} />
            <Box sx={{
                ...dotStyle,
                width: {
                    xs: '20px',
                    md: '30px'
                },
                ml: {
                    xs: '10px',
                    md: '20px'
                }
            }} />
        </Stack>
    )
}

export default DotLine