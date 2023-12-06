import { useState } from "react";
import styles from "../styles/Experience.module.css"

const MONTH = ["January", "February", "March", 
    "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"]

function formatDate(date){
    const month = MONTH[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
}

function ExperienceDetailed({show, info, setShowDetailed}){
    let id = 0;
    return(
        <>
        {show && <div className={styles.expDetailedOut} onClick={()=>{setShowDetailed(false)}}>
            <div className={styles.expDetailedIn} onClick={(e)=>{e.stopPropagation()}}>
                <div className={styles.info}>
                    <h1>{info.title}</h1>
                    <h2>{info.company}</h2>
                    <h3>{`${formatDate(info.start)} to ${formatDate(info.end)}`}</h3>
                </div>
                <ul className={styles.techStack}>
                    {info.techStack.map(tech=>{
                            return <li key={tech}>{tech}</li>
                        })}         
                </ul>
                <ul className={styles.desc}>
                    {info.desc.map(desc=>{
                        id++;
                        return <li key={id}>{desc}</li>
                    })}
                </ul> 
            </div>
        </div> }
        </>
    )
}

function Experience({info, setShowDetailed}){
    // let id = 0

    return(
        <div className={styles.experience} onClick={()=> setShowDetailed(true)}>
                <div className={styles.info}>
                    <h1>{info.title}</h1>
                    <h2>{info.company}</h2>
                    <h3>{`${formatDate(info.start)} to ${formatDate(info.end)}`}</h3>
                </div>
                <ul className={styles.techStack}>
                    {info.techStack.map(tech=>{
                            return <li key={tech}>{tech}</li>
                        })}         
                </ul>
                {/* TODO: Implement show description on press 
                    enlarge the title and description on press */}
                {/* <ul>
                    {info.desc.map(desc=>{
                        id++;
                        return <li key={id}>{desc}</li>
                    })}
                </ul> */}
        </div>
    )
}

export default function ExperienceSection ({refProp}){
    const experiences = [
        {
            title: "Software Engineer",
            company: "Cisco Systems Inc",
            start: new Date(2021, 5),
            end: new Date(2023, 1),
            desc: [
                `Provided support in understanding networking concepts. 
                Debugging and maintaining code that is related to the Routing Information Base (RIB) component of the router.`,
                "Configured a variety of network topologies with various dynamic protocols for reproducing issues and feature testing.",
                "Implemented routing APIs and unit tests to support new features within the routing code base.",
                "Created a RIB API that notifies its clients that a routing protocol has been created. Also provided, an API which queries existing routing protocol in the router.",
                "Modernized existing network automated test written in TCL to an existing python framework to allow for scalable, maintanable, and reusable tests."
            ],
            techStack: [
                "C", "C++", "Python", "IoT", "Networking"
            ]
        },
        {
            title: "Back-End/DevOps Engineer(Systems)",
            company: "International Business Machines (IBM)",
            start: new Date(2019, 4),
            end: new Date(2020, 7),
            desc: [
                "Utilized, converted, and created a combination of various workloads to stress test a specific system resource and setting upcloud clusters and services such as Red Hat OpenShift, IBM WMLA, and IBM Cloud Private.",
                "Characterized various workloads, such as AcmeAir and NVIDIA’s object detection code, by consistently producing detaileddata points that maps workload combinations, workload configurations, and resource utilization.",
                "Optimized workload configurations to produce the most optimal resource consumption. The Nvidia’s object detection wasfurther optimized to allow the scaling from 2 pods per GPU to 5 pods per GPU increasing the GPU resource usage of thesystem from 50 to 95%.",
                "Analyzed the performance of different cloud software under workload stress to exploit cloud software/system bottlenecksand provide solutions to cloud software/system bottlenecks. By changing the request scheduling algorithm of a cloudinfrastructure which was the bottleneck, we were able to significantly increase the overall throughput of the workloads aswell as increase resource usage consumptions."
            ],
            techStack: [
                "Python", "Docker", "Kubernetes", "OpenShift"
            ]

        }
    ]

    const showStateArray = []

    experiences.map(exp=>{
        showStateArray.push(useState(false));
    })

    let i = -1;

    return(
        <section className={styles.experiences} ref={refProp} id="Experiences">
            {experiences.map(exp=>{
                i ++;
                return (
                <>
                    <Experience key={exp.start} info={exp} setShowDetailed={showStateArray[i][1]}/>
                    <ExperienceDetailed key={exp.end} show={showStateArray[i][0]} info={exp} setShowDetailed={showStateArray[i][1]}/>
                </>
                )
            })}
        </section>
    )
}