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

function Experience({info}){
    // let id = 0

    return(
        <div className={styles.experience}>
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

export default function ExperienceSection (){
    const experiences = [
        {
            title: "Software Engineer",
            company: "Cisco Systems Inc",
            start: new Date(2021, 5),
            end: new Date(2023, 1),
            desc: [
                "Provided",
                "Configured",
                "Implemented"
            ],
            techStack: [
                "C", "C++", "Python", "Networking"
            ]
        },
        {
            title: "Back-End/DevOps Engineer(Systems)",
            company: "International Business Machines (IBM)",
            start: new Date(2019, 4),
            end: new Date(2020, 7),
            desc: [
                "Utilized",
                "Characterized",
                "Optimized"
            ],
            techStack: [
                "Python", "Docker", "Kubernetes", "OpenShift"
            ]

        }
    ]

    return(
        <section className={styles.experiences}>
            {experiences.map(exp=>{
                return <Experience key={exp.start} info={exp}/>
            })}
        </section>
    )
}