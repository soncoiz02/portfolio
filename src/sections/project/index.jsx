import { Box, Container, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import ProjectItem from './ProjectItem'

import beauty from '../../assets/beauty paradise.jpg'
import brighton from '../../assets/brighton.jpg'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projectData = [
    {
        coverImg: beauty,
        name: 'Beauty Paradise',
        desc: 'Spa Booking Website',
        link: 'https://beautyparadise.vercel.app'
    },
    {
        coverImg: brighton,
        name: 'Bighton College Vietnam',
        desc: 'Bighton College Website',
        link: 'https://brightoncollege.edu.vn'
    },
]

const Project = () => {
    const titleRef = useRef(null)
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    useEffect(() => {
        const titleEl = titleRef.current
        gsap.fromTo(titleEl, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.5, scrollTrigger: { trigger: titleEl } })
        gsap.fromTo('.project-item', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, stagger: 0.3, scrollTrigger: { trigger: titleEl } })
    }, [])
    return (
        <Box sx={{ py: { xs: '40px', md: '80px' } }} id='project'>
            <Container maxWidth='xl'>
                <Stack gap='50px 0' alignItems='center'>
                    <Stack alignItems='center' gap='10px' ref={titleRef}>
                        <Typography variant='h2'>My Feature <Typography color='primary' variant='h2' component='span'>Projects</Typography></Typography>
                        <Typography variant='desc' width={{ xs: '80%', md: '60%' }} textAlign='center' color='text.secondary'>
                            I have built quite a lot of projects during my work. There are some feature projects I have built. I hope you will enjoy it.
                        </Typography>
                    </Stack>
                    <Grid container spacing={5} justifyContent='center'>
                        {
                            projectData.map((item, index) => (
                                <Grid item xs={12} md={4} key={index} className='project-item'>
                                    <ProjectItem projectData={item} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Stack>
            </Container>
        </Box>
    )
}

export default Project