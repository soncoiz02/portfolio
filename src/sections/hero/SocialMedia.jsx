import { faFacebookF, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Link, Stack } from '@mui/material'
import React, { useEffect } from 'react'

const listSocialMedia = [
    {
        icon: faFacebookF,
        link: 'https://www.facebook.com/soncoiz02'
    },
    {
        icon: faTelegram,
        link: 'https://t.me/soncoiz02'
    },
    {
        icon: faEnvelope,
        link: 'mailto:sontb02.work@gmail.com'
    }
]

import gsap from 'gsap'

const SocialMedia = () => {

    useEffect(() => {
        gsap.fromTo('.social-icon', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.6 })
    }, [])

    return (
        <Stack direction='row' alignItems='center' gap='0 20px' mt={2} alignSelf={{ xs: 'center', md: 'flex-start' }}>
            {
                listSocialMedia.map((item, index) => (
                    <Button
                        color='primary'
                        variant='outlined'
                        sx={{
                            minWidth: 50,
                            minHeight: 50,
                            borderRadius: '50%',
                            transition: '0.5s',
                            ':hover': {
                                boxShadow: (theme) => `0 0 10px 1px ${theme.palette.primary.light}`,
                            }
                        }}
                        key={index}
                        component={Link}
                        href={item.link}
                        target='_blank'
                        className='social-icon'
                    >
                        <FontAwesomeIcon icon={item.icon} />
                    </Button>
                ))
            }
        </Stack>
    )
}

export default SocialMedia