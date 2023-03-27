import { Box, Container, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import DotLine from './DotLine'
import MainTitle from './MainTitle'
import MyImage from './MyImage'
import ResumeButton from './ResumeButton'
import SocialMedia from './SocialMedia'

import gsap from 'gsap'

const Hero = () => {

    useEffect(() => {
        gsap.fromTo('.desc', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5 })
    }, [])

    return (
        <Box sx={{ py: { xs: '40px', md: '80px' } }} id='about'>
            <Container
                maxWidth='xl'
            >
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    sx={{
                        height: {
                            xs: 'auto',
                            md: '100vh'
                        },
                        width: '100%'
                    }}
                    alignItems='center'
                    justifyContent='center'
                    gap='30px 0'
                >
                    <Stack
                        sx={{
                            width: { xs: '100%', md: '50%' },
                            order: { xs: 2, md: 1 }
                        }}
                    >
                        <MainTitle />
                        <DotLine />
                        <Typography
                            variant='desc'
                            color='text.secondary'
                            mt={3}
                            className='desc'
                        >
                            I am a web developer with 1 year of work experience. I always try to look for opportunities to turn the knowledge learned in school into a practical contribution to the company, and at the same time improve professional qualifications and working skills. I look forward to the opportunity to work in a supportive and growing environment.
                        </Typography>
                        <SocialMedia />
                        <ResumeButton />
                    </Stack>
                    <Stack
                        sx={{
                            width: { xs: '100%', md: '50%' },
                            order: { xs: 1, md: 2 }
                        }}
                    >
                        <MyImage />
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

export default Hero