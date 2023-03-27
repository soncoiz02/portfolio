import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Link, Stack, styled, Typography } from '@mui/material'
import React from 'react'


const ProjectItem = ({ projectData }) => {
    return (
        <Stack>
            <Image src={projectData.coverImg} alt="" />
            <Stack
                alignItems='center'
                justifyContent='space-between'
                mt={2}
                direction='row'
            >
                <Stack>
                    <Typography variant='h3'>{projectData.name}</Typography>
                    <Typography variant='desc' color='text.secondary'>{projectData.desc}</Typography>
                </Stack>
                <Button
                    variant='contained'
                    sx={{
                        minWidth: '45px',
                        minHeight: '45px',
                        borderRadius: '50%',
                        alignSelf: 'center',
                        boxShadow: 'none',
                        ':hover': {
                            boxShadow: (theme) => `0 5px 20px ${theme.palette.primary.light}`,
                            background: (theme) => theme.palette.primary.main
                        },
                        mr: 2
                    }}
                    conponent={Link}
                    underline='none'
                    href={projectData.link}
                    target='_blank'
                >
                    <FontAwesomeIcon
                        icon={faPlay}
                        fontSize='20px'
                    />
                </Button>
            </Stack>
        </Stack>
    )
}

const Image = styled('img')(({ theme }) => `
    width: 100%;
    height: 250px;
    border-radius: 10px;
    object-fit: cover;
    object-position: center;
    filter: grayscale(50%);
    transition: 0.5s;
    cursor: pointer;
    
    &:hover {
        filter: grayscale(0);
    }
`)

export default ProjectItem