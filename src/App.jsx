import Header from './sections/header/Header'
import Hero from './sections/hero'
import Skill from './sections/skill'

import { Box, useMediaQuery, useTheme } from '@mui/material'
import { useState } from 'react'
import Contact from './sections/contact'
import Footer from './sections/footer'
import MobileNav from './sections/header/MobileNav'
import Project from './sections/project'
import Service from './sections/service'

function App() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [openNav, setOpenNav] = useState(false)

  return (
    <>
      <Header setOpenNav={setOpenNav} openNav={openNav} />
      {
        !matches &&
        <MobileNav openNav={openNav} setOpenNav={setOpenNav} />
      }
      <Box sx={{
        width: '100%',
        position: 'relative',
      }}>
        <Hero />
        <Service />
        <Skill />
        <Project />
        <Contact />
      </Box>
      <Footer />
    </>
  )
}


export default App
