import {useState} from 'react'
import styles from '../styles/ProjectsSection.module.css'


function Project({info}){
    const [clicked, setClicked] = useState(false)
    let count = 0
    return (
        <div className={ true ? styles.project: `${styles.project} ${styles.active}`} onClick={()=>{
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
                <div className={!clicked ? styles.description : `${styles.description} ${styles.active}`} >
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

export default function ProjectsSection({refProp}){
    const projects = [
        {
            name: "Todo List",
            github: "https://github.com/vmdvaldez/todo-list",
            img: "#",
            techStack: ["JavaScript", "HTML", "CSS"],
            desc:[
                "Design a simple Todo list that allows the users to create tasks. Each Task has subtasks associated with it", 
                "Utilize Browser's Local Storage to keep state"]
        },
        {
            name: "Battleship",
            github: "https://github.com/vmdvaldez/battleship",
            img: "#",
            techStack: ["JavaScript", "HTML", "CSS"],
            desc: [
                "Create a famous turn-based board game called Battleship",
                "Design a multi-stage game phase: Initial (player positioning), Game (turn-based), End (Win/Loss detection)",
                "Implement repositioning (including rotation) of ships in initial game phase using DOM manipulation",
                
            ]
        },
        {
            name: "Pokemon Memory Game",
            github: "https://github.com/vmdvaldez/pokemon-memory-game",
            img: "#",
            techStack: ["React", "HTML", "CSS"],
            desc: ["Create a memory game using Pokemon Characters. User must go through all options without pressing the choosing the same unit", 
                "Utilize pokeapi to choose which pokemons to display via React hooks"]
        },
        {
            name: "Clothing Store Website",
            github: "https://github.com/vmdvaldez/shopping-website",
            img: "#",
            techStack: ["React", "HTML", "CSS"],
            desc: ["Create a mock clothing store that implements adding/removing to cart and checkout",
                "Utilize fakestore api to query for different products to display"]
        },
        {
            name: "Distributed KV Store",
            github: "",
            img: "https://github.com/lucashuang97/ece419/tree/M4signtls",
            techStack: ["Java", "ApacheZooKeeper"],
            desc: ["Created a persistent, scalable, secure and fault-tolerant distributed key-value store system using Java.",
                "Allows multiple clients to interface with multiple storage servers that are scalable in numbers", 
                `Designed a replication mechanism that replicated key-value pairs into different storages and Used Apache Zookeeper to keep track of distributed system topology. 
                With this topology information and replication, mechanisms for server storage reconstruction on failure was made possible`,
                "Built a secure connection between clients and servers using a Public Key Infrastructure (PKI) and Secure Socket Layer (SSL) connections"]
        },
        {
            name: "Cloud Workload Generator",
            github: "https://github.com/bvccvb/Capstone/tree/main",
            img: "#",
            techStack: ["Docker", "Kubernetes", "Python"],
            desc: ["Created a workload generator that allows users to pick which resource intensive (CPU, Memory, and Network) workload to use to stress the cloud system",
                "Converted  Weather Image Classification code as a RESTful service using Flask in python, containerized the service in Docker, and deployed in Kubernetes via deployment scripts to allow for cloud compatibility", 
                "Designed to consume cloud CPU resources",
                "Characterized and analyzed cloud workload behaviour in cloud systems and further improve workload scalability and resource consumption, which improved the workload consumption to be scalable by having a 10% CPU usage per instance."
            ]
        },
        {
            name: "Weather Image Classification",
            github: "https://github.com/vmdvaldez/WeatherImageClassification",
            img: "#",
            techStack: ["Python", "JupyterNotebook"],
            desc: ["Created a Weather Image Classification neural network using pyTorch",
                "Designed a combination of ANN and CNN networks to build a system that allows the user to input image(s) to categorize it as the following: cloudy, foggy, rainy, snowy, and sunny"
                ]
        },
        {
            name: "Chat WebServer",
            github: "https://github.com/vmdvaldez/ECE361-webserver/tree/master",
            img: "#",
            techStack: ["C++"],
            desc: ["Designed a chat server using C++ via sockets",
                "Users were allowed to create, join, and leave a chat-room",
                "Implemented user simple user authentication and a time-out mechanism for idle users"
                ]
        },
        {
            name: "Spotify Project",
            github: "",
            img: "#",
            techStack: ["React", "CSS", "HTML"],
            desc: ["OAuth", "API"]
        }
    ]
    return(
        <section className={styles.projects} ref={refProp}>
            <h1>Projects</h1>
            {projects.map(proj=>{
                return <Project info={proj}/>
            })}
        </section>
    )
}