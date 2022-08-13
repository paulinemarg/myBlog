import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { TbWorld } from 'react-icons/tb';
import { FiLinkedin } from 'react-icons/fi';
import '../../App.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ky0uvjw', 'template_z6v83lh', form.current, '4FwEpOrt0q2qRwytR')
      .then((result) => {
          console.log(result.text);
          alert("Your message has been sent! Thank you!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send, please try again!", error);
      });
  };

  return (
    <>
    <div className='form'>
    <form ref={form} onSubmit={sendEmail}>
      <h1 className='contact'>Contact Me</h1>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea rows={8} name="message"/>
      <input className='submitButton' type="submit" value="Send" />
    </form>
    </div>
    <div className='socialIcons'>
      <a href='https://paulinemarg.github.io/portfolio/'><TbWorld size={30}/></a>
      <a href='https://www.linkedin.com/in/paulinemarg/'><FiLinkedin size={30}/></a>
    </div>
    </>
  );
};

export default Contact;