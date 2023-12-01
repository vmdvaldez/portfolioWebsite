import {useState} from 'react'
import styles from '../styles/ProjectsSection.module.css'


function Project({info}){
    const [clicked, setClicked] = useState(false)
    let count = 0
    return (
        <div className={styles.project} onClick={()=>{
            setClicked(!clicked)
            }}>
            <div className={styles.summary}>
                <h3>{info.name}</h3>
                <ul>
                    {info.techStack.map(tech=>{
                        return <li key={tech}>{tech}</li>
                    })}
                </ul>
            </div>
            {clicked && 
                <div className={styles.description}>
                    <ul>
                        {info.desc.map(desc =>{
                            count++;
                            return <li key={count}>{desc}</li>
                        })}
                    </ul>
                    {info.github && <div><a href={info.github} target='_' onClick={(e)=>{e.stopPropagation()}}><img src="../src/assets/github-original.svg"></img></a></div>}
                </div>
                }
        </div>
    )
}   

/* TODO: 
    - Add Priority and Sorting ?
    */

export default function ProjectsSection(){
    const projects = [
        {
            name: "TODO List",
            github: "https://github.com/vmdvaldez/todo-list",
            img: "#",
            techStack: ["JavaScript", "HTML", "CSS"],
            desc:["TEST", "TEST", "TEST"]
        },
        {
            name: "Battleship",
            github: "https://github.com/vmdvaldez/battleship",
            img: "#",
            techStack: ["JavaScript", "HTML", "CSS"],
            desc: ["Rotation", "GamePhase"]
        },
        {
            name: "Pokemon-memory-game",
            github: "https://github.com/vmdvaldez/pokemon-memory-game",
            img: "#",
            techStack: ["React", "HTML", "CSS"],
            desc: ["API query", "Remember State"]
        },
        {
            name: "Clothing Store Website",
            github: "https://github.com/vmdvaldez/shopping-website",
            img: "#",
            techStack: ["React", "HTML", "CSS"],
            desc: ["API Query", "Remember State"]
        },
        {
            name: "Distributed KV Store",
            github: "",
            img: "https://github.com/lucashuang97/ece419/tree/M4signtls",
            techStack: ["Java", "ApacheZooKeeper"],
            desc: ["KV store", "Fail tolerance Mechanism", "Persistent Storage", "SSL Security"]
        },
        {
            name: "Cloud Workload Generator",
            github: "https://github.com/bvccvb/Capstone/tree/main",
            img: "#",
            techStack: ["Docker", "Kubernetes", "Python", "Java"],
            desc: ["Cloud System Stress", "Scalabale docker deployment"]
        },
        {
            name: "Weather Image Classification",
            github: "https://github.com/vmdvaldez/WeatherImageClassification",
            img: "#",
            techStack: ["Python", "JupyterNotebook"],
            desc: ["MachineLearning", "ANN and CNN networks"]
        },
        {
            name: "Chat WebServer",
            github: "https://github.com/vmdvaldez/ECE361-webserver/tree/master",
            img: "#",
            techStack: ["C++"],
            desc: ["Sockets"]
        },
        {
            name: "Spotify Project",
            github: "",
            img: "#",
            techStack: ["React", "ExpressJs", "CSS", "HTML"],
            desc: ["OAuth", "API"]
        }
    ]
    return(
        <section className={styles.projects}>
            <h1>Projects</h1>
            {projects.map(proj=>{
                return <Project info={proj}/>
            })}
        </section>
    )
}