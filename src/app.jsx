import { Divider, Typography } from '@mui/material'


import Sidebar from '@/components/sidebar/sideBar.jsx'
import Hero from '@/components/hero/hero.jsx'

import { experiences } from '@/utils/experiences.js'
import Experiences from './components/data/experiences'

import { degrees } from '@/utils/degrees.js'
import Degrees from './components/data/degrees'

export default function App() {

  return (
    <>
    <div id="main" class="h-screen flex flex-row flex-wrap bg-[#111111] text-white">
        <header class="fixed z-10">
          <Sidebar />
        </header>
        <div class="flex justify-center h-screen w-screen z-0">
          <Hero />
        </div>
        <div class="flex flex-wrap justify-center w-screen h-auto">
          <Typography class="text-6xl">Experiences</Typography>
          {experiences.map(experience => 
            <div class="flex flex-row flex-wrap w-screen h-screen">
              <Divider variant="middle" class="flex m-auto w-3/4 bg-[#00eeff]"/>
              <Experiences {...experience}/>
            </div>
          )}
        </div>
        <div class="flex flex-wrap justify-center w-screen h-auto">
          <Typography class="text-6xl">Degrees</Typography>
          {degrees.map(degree => 
            <div class="flex flex-row flex-wrap w-screen h-screen">
              <Divider variant="middle" class="flex m-auto w-3/4 bg-[#00eeff]"/>
              <Degrees {...degree}/>
            </div>
          )}
        </div>
      </div>
    </>
  )
}