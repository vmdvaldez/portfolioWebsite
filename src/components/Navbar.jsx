import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css"

export default function Navbar({refs, dir}){
    // const [dir, setDir] = useState("/");

    return(
        <nav id={styles.nav}>
            <div className={styles.logo}>{dir}</div>
            <ul>
                <a onClick={()=>{
                    refs.about.current.scrollIntoView({block: 'center'});
                    }}><li>About Me</li></a>
                <a onClick={()=>{refs.skills.current.scrollIntoView({block: 'center'})}}><li>Skills</li></a>
                <a onClick={()=>{refs.experience.current.scrollIntoView({block: 'center'})}}><li>Experience</li></a>
                <a onClick={()=>{refs.project.current.scrollIntoView({block: 'center'})}}><li>Projects</li></a>
                <a onClick={()=>refs.contact.current.scrollIntoView({block: 'center'})}><li>Contact</li></a>
            </ul>
        </nav>
    )
}