import { Avatar, Stack, Typography } from '@mui/material'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BoxSkill = ({ data }) => {
    const skillRef = useRef(null)

    useEffect(() => {
        const skillEl = skillRef.current
        gsap.fromTo('.skill', { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, scrollTrigger: { trigger: skillEl } })
    }, [])

    return (
        <Stack width='100%' >
            <Stack
                direction='row'
                alignItems='center'
                justifyContent='center'
                gap={{ xs: '0 15px', md: '0 30px' }}
                flexWrap='wrap'
                alignSelf='center'
                sx={{
                    borderRadius: '10px',
                    width: { xs: '100%', md: '70%' },
                    p: 2,
                }}
                ref={skillRef}
            >
                {
                    data?.map((item, index) => (
                        <Stack
                            alignItems='center'
                            gap='10px 0'
                            sx={{
                                py: { xs: 1, md: 2 },
                                px: { xs: 1.5, md: 3 },
                                borderRadius: '8px',
                                transition: '0.5s',
                                cursor: 'pointer'
                            }}
                            key={index}
                            className='skill'
                        >
                            <Avatar src={item.img} variant='rounded' sx={{ width: { xs: '40px', md: '80px' }, height: { xs: '40px', md: '80px' } }} />
                            <Typography variant='h3' textAlign='center'>{item.title}</Typography>
                        </Stack>
                    ))
                }
            </Stack>
        </Stack>
    )
}

export default BoxSkill