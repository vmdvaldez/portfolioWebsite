import styles from "../styles/Skills.module.css"


function SkillTab({category, items}){
    return(
        <div className={styles.skillsTab}>
            <h2>{category}</h2>
            <ul>
                {items.map(item=>{
                    return <li key={item}><img src="#"/><div>{item}</div></li>
                })}
            </ul>
        </div>
    )
}

export default function SkillsSection(){
    const skills = {
        "Front-End": ['HTML', 'CSS', 'JavaScript', 'React'],
        "Back-End": ["C", "C++", "Java", "Python", "Node"],
        "Cloud Tech": ["Docker", "Kubernetes", "OpenShift"],
        "Other": ["MATLAB", "Wireshark", "Photoshop"]
    }

    return(
        <section className={styles.skills}>
            {Object.keys(skills).map(category=>{
                return <SkillTab key={category} category={category} items={skills[category]}/>
            })} 
        </section>
    )
}