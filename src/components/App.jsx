import { useRef } from 'react'


import '../styles/App.css'
import Navbar from './Navbar'
import AboutMeSection from './AboutMe'
import SkillsSection from './Skills'
import ExperienceSection from './Experience'
import ProjectsSection from './ProjectsSection'
import ContactSection from './Contact'

function App() {
  const aboutMeRef = useRef();
  const skillsRef = useRef();
  const experienceRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();

  
  const refs = {
      about: aboutMeRef,
      skills: skillsRef,
      experience: experienceRef,
      project: projectRef,
      contact: contactRef
    }

  return (
    <>
      <Navbar refs={refs}/>
      <AboutMeSection refProp={aboutMeRef}/>
      <SkillsSection refProp={skillsRef}/>
      <ExperienceSection refProp={experienceRef}/>
      <ProjectsSection refProp={projectRef}/>
      <ContactSection refProp={contactRef}/>
    </>
  )
}

export default App
