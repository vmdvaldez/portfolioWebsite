import {useEffect, useState, useReducer, useRef} from 'react'
import styles from '../styles/ProjectsSection.module.css'

import GithubLogo from '../../src/assets/github-original.svg';
import PreviewLogo from '../../src/assets/preview-logo.svg';


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
                <div className={!clicked ? styles.description : `${styles.description} ${styles.active}`} >
                    <ul>
                        {info.desc.map(desc =>{
                            count++;
                            return <li key={count}>{desc}</li>
                        })}
                    </ul>
                    <div className={styles.links}>
                        {info.preview && <div><a href={info.preview} target='_' onClick={(e)=>{e.stopPropagation();}}><img src={PreviewLogo}></img></a></div>}
                        {info.github && <div><a href={info.github} target='_' onClick={(e)=>{e.stopPropagation()}}><img src={GithubLogo}></img></a></div>}
                    </div>
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
            index: 6,
            name: "Todo List",
            github: "https://github.com/vmdvaldez/todo-list",
            preview: "https://todo-list-ten-flax.vercel.app/",
            img: "#",
            techStack: ["JavaScript", "HTML", "CSS"],
            desc:[
                "Design a simple Todo list that allows the users to create tasks. Each Task has subtasks associated with it", 
                "Utilize Browser's Local Storage to keep state"]
        },
        {
            index: 3,
            name: "Battleship",
            github: "https://github.com/vmdvaldez/battleship",
            preview: "https://battleship-chi-steel.vercel.app/",
            img: "#",
            techStack: ["JavaScript", "HTML", "CSS"],
            desc: [
                "Create a famous turn-based board game called Battleship",
                "Design a multi-stage game phase: Initial (player positioning), Game (turn-based), End (Win/Loss detection)",
                "Implement repositioning (including rotation) of ships in initial game phase using DOM manipulation",
                
            ]
        },
        {
            index: 5,
            name: "Pokemon Memory Game",
            github: "https://github.com/vmdvaldez/pokemon-memory-game",
            preview: "https://pokemon-memory-game-two.vercel.app/",
            img: "#",
            techStack: ["React", "HTML", "CSS"],
            desc: ["Create a memory game using Pokemon Characters. User must go through all options without pressing the choosing the same unit", 
                "Utilize pokeapi to choose which pokemons to display via React hooks"]
        },
        {
            index: 4,
            name: "Clothing Store Website",
            github: "https://github.com/vmdvaldez/shopping-website",
            preview: "https://shopping-website-black.vercel.app/",
            img: "#",
            techStack: ["React", "HTML", "CSS"],
            desc: ["Create a mock clothing store that implements adding/removing to cart and checkout",
                "Utilize fakestore api to query for different products to display"]
        },
        {
            index: 0,
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
            index: 1,
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
            index: 2,
            name: "Weather Image Classification",
            github: "https://github.com/vmdvaldez/WeatherImageClassification",
            img: "#",
            techStack: ["Python", "JupyterNotebook"],
            desc: ["Created a Weather Image Classification neural network using pyTorch",
                "Designed a combination of ANN and CNN networks to build a system that allows the user to input image(s) to categorize it as the following: cloudy, foggy, rainy, snowy, and sunny"
                ]
        },
        {
            index: 7,
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
            index: 8,
            name: "Spotify Project",
            github: "",
            img: "#",
            techStack: ["React", "CSS", "HTML"],
            desc: ["OAuth", "API"]
        }
    ]


    projects.sort((a, b)=>{
        if(a.index < b.index) return -1;
        else return 1;
    })

    const [inView, setinView] = useState(false);

    useEffect(()=>{
        if(refProp.current == null) return;

        const options ={
            root: null,
            rootMargin: "0px",
            threshold: 0.7,
        }

        const observer = new IntersectionObserver((elem)=>{
            elem.forEach(e=>{
                if(!e.isIntersecting){
                    setinView(false);
                    return;
                } 
                setinView(true)
            })
        }, options)

        observer.observe(refProp.current);
        return ()=>{if(refProp.current) observer.unobserve(refProp.current)}
    },[refProp])



    return(
        <section className={styles.projects} ref={refProp} id="Projects">
            {inView && <h1>Projects</h1>}
            {projects.map(proj=>{
                return <Project info={proj}/>
            })}
        </section>
    )
}