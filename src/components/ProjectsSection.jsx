import styles from '../styles/ProjectsSection.module.css'

function Project({info}){
    return (
        <div className={styles.project}>
            <h3>{info.name}</h3>
            <ul>
                {info.techStack.map(tech=>{
                    return <li key={tech}>{tech}</li>
                })}
            </ul>
        </div>
    )
}   

/* TODO: On click slide a Project Information */
/* TODO: See More Option reloads new projects on render */

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
            github: "#",
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