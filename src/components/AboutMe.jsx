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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Interdum consectetur libero id faucibus nisl tincidunt. 
                    In nisl nisi scelerisque eu ultrices vitae auctor. 
                    Volutpat odio facilisis mauris sit. Tellus elementum sagittis vitae et leo.
                    Aenean euismod elementum nisi quis eleifend quam adipiscing. 
                    Bibendum est ultricies integer quis auctor elit sed vulputate mi. 
                    Enim ut sem viverra aliquet eget sit amet. 
                    Nec ullamcorper sit amet risus nullam eget felis eget nunc. 
                    Malesuada fames ac turpis egestas integer. 
                    Tortor at risus viverra adipiscing at. Ornare lectus sit amet est.
                </p>
            </div>
            {/* <div className={styles.image}>

            </div> */}
        </section>
    )
}