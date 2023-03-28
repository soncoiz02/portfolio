import { faCode, faMobile, faPenNib } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useRef } from 'react'

const serviceInfo = [
    {
        title: 'UI/UX Design',
        icon: faPenNib,
        color: '#FD8A8A',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit optio nulla neque aspernatur, repudiandae tenetur doloremque nihil provident'
    },
    {
        title: 'Web Development',
        icon: faCode,
        color: '#FFD966',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit optio nulla neque aspernatur, repudiandae tenetur doloremque nihil provident'
    },
    {
        title: 'Mobile Development',
        icon: faMobile,
        color: '#95BDFF',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit optio nulla neque aspernatur, repudiandae tenetur doloremque nihil provident'
    }
]

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);

const Service = () => {
    const titleRef = useRef(null)

    const serviceRef = useRef(null)

    useEffect(() => {
        const titleEl = titleRef.current
        const serviceEl = serviceRef.current

        gsap.fromTo(titleEl, { opacity: 0 }, { opacity: 1, duration: 2, scrollTrigger: { trigger: titleEl } })
        gsap.fromTo(serviceEl.children, { y: 250 }, { y: 0, duration: 2, stagger: 0.3, scrollTrigger: { trigger: serviceEl } })
    }, [])

    return (
        <Box sx={{ py: { xs: '40px', md: '80px' } }} id='service'>
            <Container maxWidth='xl'>
                <Stack gap={{ xs: '40px 0', md: '80px 0' }} alignItems='center'>
                    <Stack alignItems='center' gap='10px' ref={titleRef}>
                        <Typography variant='h2'>My <Typography color='primary' variant='h2' component='span'>Services</Typography></Typography>
                        <Typography variant='desc' width={{ xs: '80%', md: '60%' }} textAlign='center' color='text.secondary'>
                            Our services include web development, UI/UX design, and mobile development. We believe that the digital experiences you create should be both beautiful and functional. That's why we offer a comprehensive suite of digital services to help you bring your vision to life.
                        </Typography>
                    </Stack>
                    <Grid container spacing={{ xs: 2, md: 4 }} ref={serviceRef}>
                        {
                            serviceInfo.map((item, index) => (
                                <Grid item xs={12} md={4} key={index}>
                                    <Stack
                                        alignItems='center'
                                        justifyContent='center'
                                        sx={{
                                            px: { xs: 2, md: 4 },
                                            py: { xs: 4, md: 8 },
                                            borderRadius: '20px',
                                            backdropFilter: 'blur(15px)',
                                            boxShadow: index === 1 ? '-40px 40px 80px rgb(145,158,171,0.16)' : 'none',
                                            width: '100%'
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={item.icon}
                                            fontSize='50px'
                                            color={item.color}
                                        />
                                        <Typography variant='h3' mt={{ xs: 3, md: 5 }}>{item.title}</Typography>
                                        <Typography
                                            variant='desc'
                                            color='text.secondary'
                                            textAlign='center'
                                            mt={2}
                                            mb={3}
                                            width='80%'
                                        >
                                            {item.desc}
                                        </Typography>
                                    </Stack>

                                </Grid>
                            ))
                        }
                    </Grid>
                </Stack>
            </Container>
        </Box>
    )
}

export default Service