import styles from "../styles/Skills.module.css"

import html5Logo from "../assets/skillsicon/html5-original.svg";
import css3Logo from "../assets/skillsicon/css3-original.svg";
import jsLogo from "../assets/skillsicon/javascript-original.svg";
import reactLogo from "../assets/skillsicon/react-original.svg";
import cLogo from "../assets/skillsicon/c-original.svg";
import cppLogo from "../assets/skillsicon/cplusplus-original.svg";
import javaLogo from "../assets/skillsicon/java-original.svg";
import pythonLogo from "../assets/skillsicon/python-original.svg";
import nodeJSLogo from "../assets/skillsicon/nodejs-original.svg";
import dockerLogo from "../assets/skillsicon/docker-original.svg";
import kubeLogo from "../assets/skillsicon/kubernetes-plain.svg";
import matlabLogo from "../assets/skillsicon/matlab-original.svg";
import psLogo from "../assets/skillsicon/photoshop-plain.svg";
import openShiftLogo from "../assets/skillsicon/openshift-icon.svg";
import wiresharkLogo from "../assets/skillsicon/wireshark.svg";


function SkillTab({category, items}){
    // const IMAGE_PATH = "/skillsicon/";

    return(
        <div className={styles.skillsTab}>
            <h2>{category}</h2>
            <ul>
                {items.map(item=>{
                    return <li key={item.name}>
                            <div className={styles.skillsIMG}>{item.img ? <img src={item.img}/> : <img src="#"/>}</div>
                            <div>{item.name}</div>
                            </li>
                })}
            </ul>
        </div>
    )
}

export default function SkillsSection({refProp}){
    const skills = {
        "Front-End": [
            {name:'HTML', img: html5Logo}, 
            {name:'CSS', img: css3Logo}, 
            {name:'JavaScript', img:jsLogo}, 
            {name:'React', img: reactLogo}
        ],
        "Back-End": [
            {name:"C", img: cLogo}, 
            {name:"C++", img:cppLogo}, 
            {name:"Java", img:javaLogo}, 
            {name:"Python", img:pythonLogo}, 
            {name:"NodeJs", img:nodeJSLogo}
        ],
        "Cloud Tech": [
            {name:"Docker", img:dockerLogo}, 
            {name:"Kubernetes", img:kubeLogo}, 
            {name:"OpenShift", img:openShiftLogo}
        ],
        "Other": [
            {name:"MATLAB", img:matlabLogo}, 
            {name:"Wireshark", img:wiresharkLogo}, 
            {name:"Photoshop", img:psLogo}
        ]
    }

    return(
        <section className={styles.skills} ref={refProp} id="Skills">
            <h1>SKILLS</h1>
            <div className={styles.skillsList}>
                {Object.keys(skills).map(category=>{
                    return <SkillTab key={category} category={category} items={skills[category]}/>
                })} 
            </div>

        </section>
    )
}