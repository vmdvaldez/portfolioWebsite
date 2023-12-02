import styles from "../styles/AboutMe.module.css"
/* TODO: 
    - Add social media links -- Linkedin Github 
    - Add Education Section
    */
export default function AboutMeSection({refProp}){
    return(
        <section className={styles.about} ref={refProp}>
            <div className={styles.intro}>
                <h1>I am <div className={styles.name}>Vincent Valdez</div></h1>
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
            <div className={styles.image}>

            </div>
        </section>
    )
}