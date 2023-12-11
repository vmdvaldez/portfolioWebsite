import { useEffect, useRef, useState } from 'react'


import Navbar from './components/Navbar'
import AboutMeSection from './components/AboutMe'
import SkillsSection from './components/Skills'
import ExperienceSection from './components/Experience'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/Contact'

function App() {
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const [dir, setDir] = useState("root@vmdvaldez:~/");

  
  const refs = {
      about: aboutMeRef,
      skills: skillsRef,
      experience: experienceRef,
      project: projectRef,
      contact: contactRef
    }
  
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    };


  useEffect(()=>{
    const cb = (ent)=>{
      ent.forEach(e=>{
        if(!e.isIntersecting) return
        const DIRNAME ="root@vmdvaldez:~/"
        setDir(DIRNAME + e.target.id);
      })
    }
    const observer = new IntersectionObserver(cb, options);
    Object.values(refs).map(v =>{
      if (v.current == null) return;
      observer.observe(v.current);
    })

    return ()=>{
      Object.values(refs).map(v=>{
        if(v.current) observer.unobserve(v.current);
      });
    }
  }, []);


  return (
    <>
      <Navbar refs={refs} dir={dir}/>
      <AboutMeSection refProp={aboutMeRef}/>
      <SkillsSection refProp={skillsRef}/>
      <ExperienceSection refProp={experienceRef}/>
      <ProjectsSection refProp={projectRef}/>
      <ContactSection refProp={contactRef}/>
    </>
  )
}

export default App
