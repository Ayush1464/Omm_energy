import React, { useState } from 'react';
import "./FAQ.css";

const Faq = () => {
  const faqData = [
    { category: 'General', question: 'What is Omm Energy?', answer: 'Omm Energy provides sustainable energy solutions for businesses and homes to reduce carbon footprints.' },
    { category: 'General', question: 'Where is Omm Energy located?', answer: 'Our headquarters are located in Bhubaneshwar, Odisha, India.' },
    { category: 'General', question: 'How long has Omm Energy been in business?', answer: 'We have been providing energy solutions for over 10 years.' },
    { category: 'General', question: 'What is the mission of Omm Energy?', answer: 'Our mission is to provide sustainable and affordable energy solutions to reduce carbon footprints and promote environmental conservation.' },
    { category: 'General', question: 'How can I learn more about Omm Energy?', answer: 'You can visit our website or contact our support team for more information.' },
    { category: 'Services', question: 'What services does Omm Energy offer?', answer: 'We offer solar energy systems, wind energy installations, and hybrid energy setups.' },
    { category: 'Services', question: 'Do you offer custom energy solutions?', answer: 'Yes, we provide tailored energy solutions to meet the specific needs of our clients.' },
    { category: 'Services', question: 'Can I get a consultation before installation?', answer: 'Absolutely, we offer free consultations to assess your energy needs and provide the best solutions.' },
    { category: 'Services', question: 'Do you handle the entire installation process?', answer: 'Yes, we manage the entire process from planning to installation and maintenance.' },
    { category: 'Services', question: 'What kind of maintenance services do you offer?', answer: 'We offer regular maintenance checks, repairs, and system upgrades to ensure optimal performance.' },
    { category: 'Pricing', question: 'What is the cost of installation?', answer: 'Prices vary depending on project scope. Contact us for a detailed estimate.' },
    { category: 'Pricing', question: 'Are there any hidden costs?', answer: 'No, we provide transparent pricing with no hidden costs.' },
    { category: 'Pricing', question: 'Do you offer financing options?', answer: 'Yes, we offer various financing options to make our energy solutions more accessible. Contact us to learn more.' },
    { category: 'Pricing', question: 'Is there a discount for bulk installations?', answer: 'Yes, we offer discounts for bulk installations. Please contact us for more details.' },
    { category: 'Pricing', question: 'What payment methods do you accept?', answer: 'We accept various payment methods including credit/debit cards, bank transfers, and online payments.' },
    { category: 'Support', question: 'Do you offer maintenance services?', answer: 'Yes, we provide maintenance and support for all our installed systems.' },
    { category: 'Support', question: 'How can I request support?', answer: 'You can request support through our website or by contacting our support hotline.' },
    { category: 'Support', question: 'What is the response time for support requests?', answer: 'Our typical response time is within 24 hours.' },
    { category: 'Support', question: 'Do you offer emergency support?', answer: 'Yes, we offer 24/7 emergency support for critical issues.' },
    { category: 'Support', question: 'Can I track the status of my support request?', answer: 'Yes, you can track the status of your support request through our online portal.' },
    { category: 'Contact', question: 'How can I contact Omm Energy?', answer: 'Reach us via our support hotline or email available on the contact page.' },
    { category: 'Contact', question: 'What are your business hours?', answer: 'Our business hours are Monday to Friday, 9 AM to 6 PM.' },
    { category: 'Contact', question: 'Do you have a physical office I can visit?', answer: 'Yes, you can visit our office at the address provided on our contact page.' },
    { category: 'Contact', question: 'Can I schedule a meeting with a representative?', answer: 'Yes, you can schedule a meeting with one of our representatives through our website or by calling our support hotline.' },
    { category: 'Contact', question: 'Do you have social media channels?', answer: 'Yes, you can follow us on Facebook, Twitter, and LinkedIn for updates and news.' },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('General');

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setOpenIndex(null); // Reset open index when category changes
  };

  const filteredFAQs = faqData.filter(faq => faq.category === selectedCategory);

  return (
    <div className="container">
      <div className="top-bar">
        <h3>FAQ</h3>
        <h2>Omm Energy</h2>
      </div>
      <div className='faq_content'>
        <div className="sidebar">
          <h1 className="title">FAQ Categories</h1>
          <ul>
            <li><button onClick={() => handleCategoryClick('General')}>General Questions</button></li>
            <li><button onClick={() => handleCategoryClick('Services')}>Services</button></li>
            <li><button onClick={() => handleCategoryClick('Pricing')}>Pricing</button></li>
            <li><button onClick={() => handleCategoryClick('Support')}>Support</button></li>
            <li><button onClick={() => handleCategoryClick('Contact')}>Contact</button></li>
            {/* Add other categories... */}
          </ul>
        </div>

        <div className="main-content">
          <h2 className="starter">
            Welcome to the Omm Energy FAQ section! Here, you’ll find answers to the most common questions about our services, pricing, support, and more.
          </h2>

          {filteredFAQs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                Q. {faq.question}
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>Ans. {faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;