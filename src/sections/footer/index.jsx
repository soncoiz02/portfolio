import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box
            sx={{
                width: '100%',
                borderTop: (theme) => `2px solid ${theme.palette.primary.main}`
            }}
        >
            <Container maxWidth='xl'>
                <Stack py={2}>
                    <Typography variant='body2'>&#169; 2023 Henry.T. All rights reserved.</Typography>
                </Stack>
            </Container>
        </Box>
    )
}

export default Footer