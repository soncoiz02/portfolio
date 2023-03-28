import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Container, Divider, Stack, Typography, useTheme } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import ContactForm from './ContactForm'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
    const theme = useTheme()
    const titleRef = useRef(null)

    useEffect(() => {
        const titleEl = titleRef.current
        gsap.fromTo(titleEl, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: titleEl } })
        gsap.fromTo('.info', { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 1, stagger: 0.3, scrollTrigger: { trigger: '.list-info' } })
    }, [])

    return (
        <Box sx={{ py: { xs: '40px', md: '80px' } }} id='contact'>
            <Container maxWidth='xl'>
                <Stack gap={{ xs: '0 40px', md: '0 80px' }} direction={{ xs: 'column', md: 'row' }}>
                    <Stack width={{ xs: '100%', md: '50%' }} gap='30px 0'>
                        <Stack gap='10px' width='100%' ref={titleRef}>
                            <Typography variant='h2'>My <Typography color='primary' variant='h2' component='span'>Contact</Typography></Typography>
                            <Typography variant='desc' color='text.secondary'>You can contact me through the ways below. Or fill out the form and send me a message.</Typography>
                        </Stack>
                        <Stack gap='20px 0' className='list-info'>
                            <Stack direction='row' gap='0 10px' alignItems='center' className='info' alignSelf='flex-start'>
                                <FontAwesomeIcon icon={faPhone} color='#fcb772' fontSize='24px' />
                                <Divider orientation='vertical' />
                                <Typography variant='h5'>+84 0911998563</Typography>
                            </Stack>
                            <Stack direction='row' gap='0 10px' alignItems='center' className='info' alignSelf='flex-start'>
                                <FontAwesomeIcon icon={faEnvelope} color='#fc7972' fontSize='24px' />
                                <Divider orientation='vertical' />
                                <Typography variant='h5'>sontb02.work@gmail.com</Typography>
                            </Stack>
                            <Stack direction='row' gap='0 10px' alignItems='center' className='info' alignSelf='flex-start'>
                                <FontAwesomeIcon icon={faFacebookSquare} color='#72a7fc' fontSize='24px' />
                                <Divider orientation='vertical' />
                                <Typography variant='h5'>facebook.com/soncoiz02</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <ContactForm />
                </Stack>
            </Container>
        </Box>
    )
}

export default Contact