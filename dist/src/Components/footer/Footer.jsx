import React from 'react';
import './footer.css';
import bottom from '../Asset/bottom.avif';
import { FaPhone } from 'react-icons/fa6';

const Footer = () => {
  const handleSendEmail = () => {
    const email = document.querySelector('.footer_email').value; // Get the email input
    const subject = 'Message from Portfolio'; // Customize the subject
    const body = `Hello,\n\nI would like to get in touch with you.\n\nBest regards,\n`; // Customize the body

    // Open the default email client
    window.location.href = `mailto:fenetroba700@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&cc=${encodeURIComponent(email)}`;
  };

  return (
    <div className='footer' id='Contact'>
      <div className="footer_right">
        <h1>Send Me A Message!</h1>
        <p>Call me or send me a message; I am happy to work with you.</p>
        <input type="email" className="footer_email" placeholder='Text me' />
        <button className='footer_btn' onClick={handleSendEmail}>Send</button>
        <FaPhone /><span><a href="tel:+251905420124">+251905420124</a></span>
      </div>
      <div className="footer_left">
        <img src={bottom} alt="sphere_3d_shape" style={{ width: '200px', height: '200px' }} />
      </div>
    </div>
  );
}

export default Footer;