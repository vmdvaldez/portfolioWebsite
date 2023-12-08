import { useState, useEffect } from "react";
import styles from "../styles/AboutMe.module.css"
/* TODO: 
    - Add social media links -- Linkedin Github 
    - Add Education Section
    */
export default function AboutMeSection({refProp}){

    const [inView, setinView] = useState(false);

    useEffect(()=>{
        if(refProp.current == null) return;

        const options ={
            root: null,
            rootMargin: "0px",
            threshold: 0.9,
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
        <section className={styles.about} ref={refProp} id="AboutMe">
            <div className={styles.intro}>
                <h1>I am {inView && <div className={styles.name}>Vincent Valdez</div>}</h1>
                <p> A 2021 graduate from University Of Toronto, Major in Computer Engineering. 
                    In my undergraduate years I learned the fundamental concepts of computer programming and architecture. 
                    It was mostly focused on C and C++ language, systems and backend programming. 
                    After my 3rd year, I worked at IBM for a 16-month internship where I analyzed system performances 
                    and was introduced to cloud technologies. Post graduation, I worked at Cisco where I was able to take a
                    dive into the world of routers and network programming. Since then, I have realized that I have only been working
                    on the backend of things and decided to expose myself to front-end development. I decided that Web Development would be 
                    a great path to learning front-end so I took the time to go through the "Odin Project" online course. With my background in 
                    backend development and newly learned frontend development skill, I am pursuing to be a Full Stack Developer.
                   
                </p>
            </div>
            {/* <div className={styles.image}>

            </div> */}
        </section>
    )
}