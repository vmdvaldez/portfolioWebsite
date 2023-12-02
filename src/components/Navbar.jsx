import styles from "../styles/Navbar.module.css"

export default function Navbar({refs}){
    console.log(refs)
    return(
        <nav id={styles.nav}>
            <div className={styles.logo}>Logo</div>
            <ul>
                <a onClick={()=>{refs.about.current.scrollIntoView()}}><li>About Me</li></a>
                <a onClick={()=>{refs.skills.current.scrollIntoView()}}><li>Skills</li></a>
                <a onClick={()=>{refs.experience.current.scrollIntoView()}}><li>Experience</li></a>
                <a onClick={()=>{refs.project.current.scrollIntoView()}}><li>Projects</li></a>
                <a onClick={()=>refs.contact.current.scrollIntoView()}><li>Contact</li></a>
            </ul>
        </nav>
    )
}