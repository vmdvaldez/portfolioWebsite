import { useState } from "react";
import styles from "../styles/Contact.module.css";

export default function ContactSection({refProp}){

    function submitToEmail(e){
            e.preventDefault();
            const email = e.target.elements.email.value;
            const name = e.target.elements.name.value;
            const message = e.target.elements.message.value;
            fetch("https://formsubmit.co/ajax/ff9c9212d7da9d10bc0cf6d8c8488871", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                })
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.log(error));
                setSubmitted(true)
    }

    const [submitted, setSubmitted] = useState(false);

    return(
        <section className={styles.contactInfo} ref={refProp} id="Contact">
            
            <h1>Contact Me</h1>
            <form onSubmit={submitToEmail}>
                <div className={styles.inputs}>
                      <input type="text" name="name" placeholder="Name"></input>
                    <input type="email" name="email" placeholder="Email"></input>
                </div>
                <textarea type="text" name="message" placeholder="Type Your Message Here..."></textarea>
                {!submitted ? 
                    <button type="submit">
                        <div>Submit</div>
                    </button> :
                    <div className={styles.submitted}> Submitted</div>
                }
            </form>
        </section>
    )
}