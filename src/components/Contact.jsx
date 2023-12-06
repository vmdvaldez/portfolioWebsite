import styles from "../styles/Contact.module.css";

export default function ContactSection({refProp}){
    return(
        <section className={styles.contactInfo} ref={refProp} id="Contact">
            <h1>Contact Me</h1>
            <form>
                <div>
                    <input type="text" name="name" placeholder="Name"></input>
                    <input type="email" name="email" placeholder="Email"></input>
                </div>
                <textarea type="text" name="message" placeholder="Type Your Message Here..."></textarea>
            </form>
        </section>
    )
}