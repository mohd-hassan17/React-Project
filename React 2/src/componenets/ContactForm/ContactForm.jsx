import styles from "./Contact.module.css"
import Button from "../Button/Button";
import { MdOutlineMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
import { useState } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const onSubmit = (event) => {
      event.preventDefault();

      setName(event.target[0].value);
      setEmail(event.target[1].value);
      setText(event.target[2].value);
     
    };
    const onCall = () => {
        alert("Calling")
    }

    useGSAP(() => {
      gsap.from(".form",{
        scale:0,
        opacity:0,
        duration:1,
        delay:1.5
      })
    })
    useGSAP(() => {
      gsap.from(".img",{
        scale:0,
        opacity:0,
        duration:1,
        delay:1.5
      })
    })
    return(

       <section className={styles.container}>

        <div className={`${styles.contact_form} form`}>
        <div className={styles.top_btn}>
           <Button text="VIA SUPPOT CHAT" icon={<MdOutlineMessage fontSize="24px"/>}/>
           <Button onClick={onCall} text="VIA CALL" icon={<IoCall fontSize="24px"/>}/>
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
        <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text"
             rows="8" />
          </div>
          <div className={styles.sbtn}>
          <Button
          
          text="SUBMIT"
         
        />
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
        </div>
        <div className={`${styles.image} img`}>
        <img src="https://raw.githubusercontent.com/anshuopinion/React-10-Projects/f3baadbbaca5c4dab15b4a811e8649d1f9f79473/project-2/public/images/contact.svg" alt="" />
        </div>
       </section>
        
    )
}

export default ContactForm;