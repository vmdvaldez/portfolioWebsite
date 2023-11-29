import styles from "../styles/AboutMe.module.css"

export default function AboutMeSection(){
    return(
        <section className={styles.about}>
            <div className={styles.intro}>
                <h1>I am <span className={styles.name}>Vincent Valdez</span></h1>
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