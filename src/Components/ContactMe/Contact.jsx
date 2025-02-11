import { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'; // Create this CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('All fields are required');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setStatus('Sending...');

    try {
      await emailjs.send(
        'service_748qe29',    // Replace with your EmailJS service ID
        'template_n1ul3o3',   // Replace with your EmailJS template ID
        formData,
        'vGEZ_vWQ1Zw4-o1WR'     // Replace with your EmailJS public key
      );

      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 3 seconds
      setTimeout(() => setStatus(''), 3000);
      
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
      console.error('Email sending error:', error);
    }
  };

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className='input'
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
                      className='input'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
                      className='input'
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows="5"
          />
        </div>

<div className='btns'>
        <button 
          type="submit" 
          className="submit-btn"
          disabled={status === 'Sending...'}
        >
          {status === 'Sending...' ? 'Sending...' : 'Send Message'}
        </button>
        </div>
        {status && <div className={`status ${status.includes('success') ? 'success' : 'error'}`}>{status}</div>}
      </form>
    </section>
  );
};

export default Contact;