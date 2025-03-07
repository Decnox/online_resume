import { useState } from 'preact/hooks'
import './app.css'

import AppHeader from "./layout/header/AppHeader.jsx"
import AppFooter from "./layout/footer/AppFooter.jsx"
import AppPassions from "./layout/passions/AppPassions.jsx"
import AppExperiences from "./layout/experiences/appExperience.jsx"
import AppSkills from './layout/Skills/AppSkills.jsx'

export function App() {
  return (
    <div className='app'>
      <AppHeader/>
      <AppPassions/>
      <AppExperiences/>
      <AppSkills/>
      <AppFooter/>
    </div>
  )
}
