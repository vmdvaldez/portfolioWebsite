import styles from "../styles/Skills.module.css"

const IMAGE_PATH = "../src/assets/skillsicon/"

function SkillTab({category, items}){

    return(
        <div className={styles.skillsTab}>
            <h2>{category}</h2>
            <ul>
                {items.map(item=>{
                    return <li key={item.name}>
                            {item.img ? <img src={ IMAGE_PATH + item.img}/> : <img src="#"/>}
                            <div>{item.name}</div>
                            </li>
                })}
            </ul>
        </div>
    )
}

export default function SkillsSection(){
    const skills = {
        "Front-End": [
            {name:'HTML', img:"html5-original.svg"}, 
            {name:'CSS', img:"css3-original.svg"}, 
            {name:'JavaScript', img:"javascript-original.svg"}, 
            {name:'React', img:"react-original.svg"}
        ],
        "Back-End": [
            {name:"C", img:"c-original.svg"}, 
            {name:"C++", img:"cplusplus-original.svg"}, 
            {name:"Java", img:"java-original.svg"}, 
            {name:"Python", img:"python-original.svg"}, 
            {name:"NodeJs", img:"nodejs-original.svg"}
        ],
        "Cloud Tech": [
            {name:"Docker", img:"docker-original.svg"}, 
            {name:"Kubernetes", img:"kubernetes-plain.svg"}, 
            {name:"OpenShift", img:".svg"}
        ],
        "Other": [
            {name:"MATLAB", img:"matlab-original.svg"}, 
            {name:"Wireshark", img:".svg"}, 
            {name:"Photoshop", img:"photoshop-plain.svg"}
        ]
    }

    return(
        <section className={styles.skills}>
            {Object.keys(skills).map(category=>{
                return <SkillTab key={category} category={category} items={skills[category]}/>
            })} 
        </section>
    )
}