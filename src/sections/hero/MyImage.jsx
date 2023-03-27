import { Box, keyframes, Stack, styled } from '@mui/material'
import React, { useEffect } from 'react'

import myImg from '../../assets/my-img.png'

import gsap from 'gsap'

const MyImage = () => {

    useEffect(() => {
        gsap.fromTo('.my-img', { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 2.5 })
    }, [])

    return (
        <Stack justifyContent='center' alignItems='center' className='my-img'>
            <ImageCover
                sx={{
                    width: { xs: '150px', md: '200px' },
                    height: { xs: '180px', md: '280px' }
                }}
            >
                <ImageObject>
                    <img src={myImg} alt="My Image" />
                </ImageObject>
                <ImageLayer sx={{
                    width: { xs: '200px', md: '280px' },
                    height: { xs: '180px', md: '220px' }
                }}></ImageLayer>
            </ImageCover>
            <ImageShadow></ImageShadow>
        </Stack>
    )
}

const upDown = keyframes`
    0% {
        transform: translateY(0px)
    }
    100% {
        transform: translateY(30px)
    }
`

const scale = keyframes`
    0% {
        transform: scale(1)
    }
    100% {
        transform: scale(0.5)
    }
`

const ImageObject = styled(Box)`
    width: 100%;
    height: 100%;
    mask-image: -webkit-gradient(linear, center top, center bottom, 
    color-stop(1.00,  rgba(0,0,0,0)),
    color-stop(0.00,  rgba(0,0,0,1)));
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
        filter: contrast(80%) brightness(120%);
    }
`

const ImageLayer = styled(Box)`
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    border-radius:50%;
    background: linear-gradient(360deg, #8df7c2 0%, rgba(255, 255, 255, 0) 36.53%);
    z-index: 2;
`

const ImageShadow = styled(Box)`
    width: 205px;
    height: 40px;
    background: rgba(76, 223, 161, 0.46);
    filter: blur(15px);
    margin-top: 100px;
    border-radius: 50%;
    animation: ${scale} 2s linear infinite alternate;
`

const ImageCover = styled(Box)`
    position: relative;
    animation: ${upDown} 2s linear infinite alternate;
    animation-delay: 0.2s;
`

export default MyImage