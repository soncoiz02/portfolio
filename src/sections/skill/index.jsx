import { Box, Container, Stack, styled, Tab, Tabs, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import BoxSkill from './BoxSkill'

import blur from '../../assets/blur.svg'
import techImg from '../../assets/tech-bg.png'

// Front-end image

import react from '../../assets/logo/front-end/react.png'
import angular from '../../assets/logo/front-end/angular.png'
import nextjs from '../../assets/logo/front-end/nextjs.png'
import mui from '../../assets/logo/front-end/mui.png'
import redux from '../../assets/logo/front-end/redux.png'
import html from '../../assets/logo/front-end/html.png'
import css from '../../assets/logo/front-end/css.png'
import js from '../../assets/logo/front-end/js.png'
import sass from '../../assets/logo/front-end/sass.png'
import tailwind from '../../assets/logo/front-end/tailwind.png'
import ts from '../../assets/logo/front-end/ts.png'

// Front-end image

import nodejs from '../../assets/logo/back-end/nodejs.png'
import mongodb from '../../assets/logo/back-end/mongodb.png'
import socket from '../../assets/logo/back-end/socket.png'
import sql from '../../assets/logo/back-end/sql.png'
import firebase from '../../assets/logo/back-end/firebase.png'

// Tool image

import figma from '../../assets/logo/tool/figma.png'
import pts from '../../assets/logo/tool/pts.png'
import git from '../../assets/logo/tool/git.png'
import github from '../../assets/logo/tool/github.png'
import jira from '../../assets/logo/tool/jira.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const frontEndData = [
    {
        img: react,
        title: 'ReactJs'
    },
    {
        img: angular,
        title: 'Angular'
    },
    {
        img: nextjs,
        title: 'NextJs'
    },
    {
        img: mui,
        title: 'Mui'
    },
    {
        img: redux,
        title: 'Redux'
    },
    {
        img: html,
        title: 'HTML'
    },
    {
        img: css,
        title: 'CSS'
    },
    {
        img: js,
        title: 'Javascript'
    },
    {
        img: ts,
        title: 'Typescript'
    },
    {
        img: sass,
        title: 'SASS'
    },
    {
        img: tailwind,
        title: 'Tailwind CSS'
    }
]

const backEndData = [
    {
        img: nodejs,
        title: 'NodeJs'
    },
    {
        img: mongodb,
        title: 'MongoDb'
    },
    {
        img: socket,
        title: 'Socket IO'
    },
    {
        img: sql,
        title: 'SQL'
    },
    {
        img: firebase,
        title: 'Firebase'
    },
]

const toolData = [
    {
        img: figma,
        title: 'Figma'
    },
    {
        img: pts,
        title: 'Photoshop'
    },
    {
        img: git,
        title: 'Git'
    },
    {
        img: github,
        title: 'Github'
    },
    {
        img: jira,
        title: 'Jira'
    },
]

gsap.registerPlugin(ScrollTrigger)

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>
                    {children}
                </>
            )}
        </div>
    );
}

const tabTitle = ['Front-end', 'Back-end', 'Tool']

const Skill = () => {
    const [tabValue, setTabValue] = useState(0)
    const titleRef = useRef(null)

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    useEffect(() => {
        const titleEl = titleRef.current
        gsap.fromTo(titleEl, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 2, scrollTrigger: { trigger: titleEl } })
    }, [])

    return (
        <Box sx={{ position: 'relative', overflow: 'hidden', py: { xs: '40px', md: '80px' } }} id='skill'>
            <Container maxWidth='xl'>
                <Stack py={3} alignItems='center' gap='30px 0'>
                    <Stack alignItems='center' gap='10px' ref={titleRef}>
                        <Typography variant='h2'>My <Typography color='primary' variant='h2' component='span'>Skills</Typography></Typography>
                        <Typography variant='desc' width={{ xs: '80%', md: '60%' }} textAlign='center' color='text.secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non doloremque ipsam impedit numquam at tenetur blanditiis. Quae, quam veniam vel necessitatibus ipsum rerum porro quisquam mollitia magnam corporis. Aliquam, tempora?</Typography>
                    </Stack>
                    <Stack alignItems='center' gap='20px 0'>
                        <Tabs value={tabValue} onChange={handleChange} sx={{
                            '.MuiTabs-indicator': {
                                height: '100%',
                                borderRadius: '10px 10px 5px 5px',
                                zIndex: -1,
                            }
                        }}>
                            {
                                tabTitle.map((item, index) =>
                                    <Tab
                                        label={item}
                                        key={index}
                                        sx={{
                                            '&.Mui-selected': {
                                                color: 'white',
                                            },
                                            borderRadius: '10px 10px 0 0',
                                            color: (theme) => theme.palette.text.primary,
                                            transition: '0.5s'
                                        }}
                                    />
                                )
                            }
                        </Tabs>
                        <TabPanel value={tabValue} index={0}>
                            <BoxSkill data={frontEndData} />
                        </TabPanel>
                        <TabPanel value={tabValue} index={1}>
                            <BoxSkill data={backEndData} />
                        </TabPanel>
                        <TabPanel value={tabValue} index={2}>
                            <BoxSkill data={toolData} />
                        </TabPanel>
                    </Stack>
                </Stack>
            </Container>
            {/* <BlurLayer src={blur} /> */}
            <TechImg src={techImg} />
        </Box>
    )
}

const BlurLayer = styled('img')`
    position: absolute;
    top: 0;
    left: -150px;
    z-index: -1;
`


const TechImg = styled('img')`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  width: 500px;
  height: 500px;
  object-fit: cover;
  filter: hue-rotate(313deg);
  mask-image: -webkit-gradient(linear, center top, center bottom, 
    color-stop(1.00,  rgba(0,0,0,0)),
    color-stop(0.00,  rgba(0,0,0,1)));

`

export default Skill