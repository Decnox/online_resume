import { useState } from 'react'
import AppSideBar from './components/SideBar/appSideBar'
import AppPresentation from './components/Presentation/appPresentation'
import AppExperiences from '@/components/Experiences/appExperiences'
import { experiences } from './utils/experiences.js'
import { diplomas } from './utils/diplomas.js'
import AppDiplomas from './components/Diplomas/appDiplomas.jsx'
import { Divider, Typography } from '@mui/material'
import Drawer from '@mui/material/Drawer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="main" class="h-screen flex flex-row flex-wrap bg-[#111111] text-white">
        <header class="fixed z-10">
          <AppSideBar class=""/>
        </header>
        <div class="flex justify-center h-screen w-screen z-0">
          <AppPresentation/>
        </div>
        <div class="flex flex-wrap justify-center w-screen h-auto">
          <Typography class="text-6xl">Experiences</Typography>
          {experiences.map(experience => 
            <div class="flex flex-row flex-wrap w-screen h-screen">
              <Divider variant="middle" class="flex m-auto w-3/4 bg-[#00eeff]"/>
              <AppExperiences {...experience}/>
            </div>
          )}
        </div>
        <div class="flex flex-wrap justify-center w-screen h-auto">
          <Typography class="text-6xl">Diplomas</Typography>
          {diplomas.map(diploma => 
            <div class="flex flex-row flex-wrap w-screen h-screen">
              <Divider variant="middle" class="flex m-auto w-3/4 bg-[#00eeff]"/>
              <AppDiplomas {...diploma}/>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App;
