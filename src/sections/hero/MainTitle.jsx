import { keyframes, Stack, styled, Typography, useTheme } from '@mui/material'
import React from 'react'

const MainTitle = () => {
    const theme = useTheme()

    const typing1 = keyframes`
        from { 
            width: 0;
            border-right: .15em solid ${theme.palette.secondary.main};
        }
        to { width: 100%; border-right: .15em solid ${theme.palette.secondary.main}; }
    `

    const typing2 = keyframes`
        0% { 
            width: 0;
            border-right: .15em solid ${theme.palette.secondary.main};
        }
        99% { width: 99%; border-right: .15em solid ${theme.palette.secondary.main}; }

        100% {width: 100%;}
    `

    const MainTitle = styled(Typography)`
        white-space: nowrap;
        animation: ${typing1} 3.5s steps(30, end);
        overflow: hidden;
        border: none;
    `

    const SubMainTitle = styled(Typography)`
        white-space: nowrap;
        animation: ${typing2} 3.5s forwards steps(30, end);
        overflow: hidden;
        border: none;
        animation-delay: 3.5s;
        width: 0;
    `

    return (
        <Stack sx={{ width: { xs: '100%', md: '450px' } }}>
            <MainTitle variant='h1'>
                Hi, I’m <Typography variant='h1' color='primary' component='span'>Tran Son</Typography>
            </MainTitle>
            <SubMainTitle variant='h1'>
                A Web Developer.
            </SubMainTitle>
        </Stack>
    )
}


export default MainTitle