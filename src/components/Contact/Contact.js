import React, { useRef, useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [name, setEnteredName] = useState("");
    const [email, setEnteredEmail] = useState("");
    const [message, setEnteredMessage] = useState("");

    const nameChangedHandler = (e) => {
        setEnteredName(e.target.value);
    }

    const emailChangedHandler = (e) => {
        setEnteredEmail(e.target.value);
    }

    const messageChangedHandler = (e) => {
        setEnteredMessage(e.target.value);
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(process.env.REACT_APP_PORTFOLIO_SERVICE_ID, process.env.REACT_APP_PORTFOLIO_TEMPLATE_ID, form.current, {
            publicKey: process.env.REACT_APP_PORTFOLIO_PUBLIC_KEY,
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
        );

        setEnteredName("");
        setEnteredEmail("");
        setEnteredMessage("");

      }

  return (
    <div className='contact' id='contact'>
        <div className='div-contact'>
            <div className='div-contact-title'>Contact <span className='blue'>Me!</span></div>
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                <input className='input-name' type="text" name="user_name" value={name} onChange={nameChangedHandler} placeholder='NAME' autoComplete='off' required />
                <input className='input-email' type="email" name="user_email" value={email} onChange={emailChangedHandler} placeholder='EMAIL ADDRESS' autoComplete='off' required />
                <textarea className='input-message' name="message" value={message} onChange={messageChangedHandler} placeholder='MESSAGE' autoComplete='off' required />
                <input className='button-send' type="submit" value="Send" />
            </form>
        </div>
    </div>
  )
}
