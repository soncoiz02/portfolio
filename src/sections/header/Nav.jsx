import { Link, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export const navData = [
    {
        title: 'About me',
        link: '#about'
    },
    {
        title: 'Service',
        link: '#service'
    },
    {
        title: 'Skill',
        link: '#skill'
    },
    {
        title: 'Project',
        link: '#project'
    },
    {
        title: 'Contact',
        link: '#contact'
    }
]

const Nav = () => {
    const [hash, setHash] = useState('')

    const checkHash = (check, index) => {
        if (index === 0 && !check) return true
        return hash === check
    }

    useEffect(() => {
        setHash(window.location.hash)
    }, [])

    return (
        <Stack direction='row' alignItems='center' gap='0 20px'>
            {
                navData.map((item, index) => (
                    <Typography
                        variant='h4'
                        color={checkHash(item.link, index) ? 'primary' : 'text.primary'}
                        component={Link}
                        underline='none'
                        href={item.link}
                        key={index}
                        onClick={() => setHash(item.link)}
                    >
                        {item.title}
                    </Typography>
                ))
            }
        </Stack>
    )
}

export default Nav