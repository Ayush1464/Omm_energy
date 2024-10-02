import React from 'react';
import './Contact.css';

const ContactPage = () => {
  return (
    <div className='Contact'>
      <div className="page-content">
        <div className="container clearfix">
        <div className="content-text">
  <p>
    Send mail <a href="mailto:ommenergy@gmail.com">ommenergy@gmail.com</a> or Call us on <a href="tel:123456789">+91-123456789</a> for your queries or request a quote for your project requirements.
  </p>
  <p>We will be happy to assist you with your inquiries.</p>
</div>
<div>
<h1 style={{ textAlign: 'center', fontSize: '30px' }}>
  <span className="heading-underline" style={{ color: '#007bff' }}>
    Our Presence
  </span>
</h1>

</div>



          <div className="contact-page">
            <div className="contact-section">
              <div className="contactfirst">
                <h4>Corporate Office</h4>
                <div className="contact-details">
                  <div className="map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.123456789!2d85.7860297!3d20.2628312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c123456789!2sKhandagiri%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1234567890"
                      allowFullScreen
                      loading="lazy"
                      title="Corporate Office Map"
                    ></iframe>
                  </div>
                  <div className="details">
                    <div className='icons'>
                      <i className='bx bx-location-plus'></i>
                      <p><strong>Address:</strong> Shop No. - 40, Barabhuja complex, Khandagiri, Bhubaneswar, Odisha</p>
                    </div>
                    <div className='icons'>
                      <i className='bx bx-phone-call'></i>
                      <p><strong>Phones:</strong> <a href="tel:123456789">+91-123456789</a></p>
                    </div>
                    <div className='icons'>
                      <i className='bx bx-envelope'></i>
                      <p><strong>Email:</strong> <a href="mailto:ommenergy@gmail.com">ommenergy@gmail.com</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h1>Get in Touch</h1>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="number">Phone Number *</label>
                  <input type="number" id="number" placeholder="Your Phone Number " required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
