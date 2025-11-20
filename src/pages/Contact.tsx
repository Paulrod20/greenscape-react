import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
   });

   const [submitted, setSubmitted] = useState(false);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
   };

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    //Reset form after 3 seconds
    setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', message: '', });
        setSubmitted(false);
    }, 3000);
   };


   return (
    <div className="contact">
        <h1>Contact Us</h1>
        <p className="contact-intro">
            Get in touch for a free consultation and quote
        </p>

        <div className="contact-container">
                <div className="contact-info">
                    <h2>Get In Touch</h2>
                    <div className="info-item">
                        <span className="info-icon">📞</span>
                        <div>
                            <h3>Phone</h3>
                            <p>(555) 123-4567</p>
                        </div>
                    </div>
                    
                    <div className='info-item'>
                        <span className='info-icon'>✉️</span>
                        <div>
                            <h3>Email</h3>
                            <p>info@greenscape.com</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <span className="info-icon">📍</span>
                        <div>
                            <h3>Location</h3>
                            <p>123 Garden Street<br />Green  City, GC 12345</p>
                        </div>
                    </div>
                </div>


                <form className="contact-form" onSubmit={handleSubmit}>
                    {submitted && (
                        <div className="success-message">
                            Thank you! We'll get back to you soon.
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="name">Name *</label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message *</label>
                        <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required></textarea>
                    </div>

                    <button type='submit' className='submit-button'>Send Message</button>
                </form>
            </div>
        </div>
   );
}

export default Contact;