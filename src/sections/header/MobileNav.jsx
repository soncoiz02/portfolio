import { Link, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { navData } from './Nav'

const MobileNav = ({ setOpenNav, openNav }) => {
    const [hash, setHash] = useState('')

    const checkHash = (check, index) => {
        if (index === 0 && !check) return true
        return hash === check
    }

    useEffect(() => {
        setHash(window.location.hash)
    }, [])

    return (
        <Stack
            sx={{
                width: '75%',
                height: '100vh',
                background: 'rgba(255,255,255,0.6)',
                backdropFilter: 'blur(15px)',
                position: 'fixed',
                top: 0,
                left: openNav ? 0 : '-100%',
                p: 4,
                pt: 12,
                boxShadow: '0 0 10px rgba(0,0,0,.1)',
                zIndex: 99999,
                transition: '1s'
            }}
            gap='20px 0'
        >
            {
                navData.map((item, index) => (
                    <Typography
                        variant='h2'
                        color={checkHash(item.link, index) ? 'primary' : 'text.primary'}
                        component={Link}
                        underline='none'
                        href={item.link}
                        key={index}
                        onClick={() => {
                            setHash(item.link)
                            setOpenNav(false)
                        }}
                    >
                        {item.title}
                    </Typography>
                ))
            }
        </Stack>
    )
}

export default MobileNav