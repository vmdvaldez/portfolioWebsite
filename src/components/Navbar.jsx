import styles from "../styles/Navbar.module.css"

export default function Navbar(){
    return(
        <nav id={styles.nav}>
            <ul>
                <a href="#"><li>Logo</li></a>
                <a href="#"><li>About Me</li></a>
                <a href="#"><li>Experience</li></a>
                <a href="#"><li>Projects</li></a>
                <a href="#"><li>Contact</li></a>
            </ul>
        </nav>
    )
}