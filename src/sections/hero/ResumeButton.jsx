import React, { useEffect, useRef } from 'react'
import MainButton from '../../components/MainButton'
import myCv from '../../assets/my-cv.pdf'

import gsap from 'gsap'

const ResumeButton = () => {
    useEffect(() => {
        gsap.fromTo('.cv-btn', { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1.5 })
    }, [])

    return (
        <MainButton
            colorType='primary'
            customStyle={{
                py: 1.8,
                px: 6,
                alignSelf: { xs: 'center', md: 'flex-start' },
                mt: 6
            }}
            className='cv-btn'
        >
            <a href={myCv} download="TRAN BAO SON _ FRONTEND DEVELOPER" style={{ textDecoration: 'none', color: 'inherit' }}>
                Download CV
            </a>
        </MainButton>
    )
}

export default ResumeButton