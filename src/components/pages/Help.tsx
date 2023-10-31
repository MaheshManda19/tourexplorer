import React, { useState, ChangeEvent, FormEvent } from 'react';
import './Help.css';
import Header from '../../common/Header';

type Question = {
  id: number;
  question: string;
  answer: string;
};

type ContactInfo = {
  name: string;
  email: string;
  message: string;
};

function Help() {
  const [questions] = useState<Question[]>([
    {
      id: 1,
      question: 'How can I explore attractive tour pages?',
      answer: 'To explore attractive tour pages, simply go to our homepage and start browsing through the featured tours. You can also use the search and filter options to find tours that match your interests.',
    },
    {
      id: 2,
      question: 'How do I use the search and filter options?',
      answer: 'On the homepage, you ll find a search bar where you can enter keywords such as tour names or locations to narrow down your choices. You can also use the "Place Type" dropdown to filter tours by categories like Forest, River, or Hill Station.',
    },
    {
      id: 3,
      question: 'What payment methods do you accept?',
      answer: 'We accept major credit cards, PayPal, and bank transfers for payments. You can choose your preferred payment method during the booking process.',
    },
    {
      id: 4,
      question: 'Is there a cancellation policy?',
      answer: 'Yes, we have a cancellation policy. You can review our cancellation policy on the "Terms and Conditions" page before making a booking.',
    },
  ]);

  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: '',
    email: '',
    message: '',
  });

  // Function to handle changes in the contact form
  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setContactInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // Function to handle form submission (you can add your own logic to handle the email)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your logic to send the email here
    console.log('Sending email:', contactInfo);
    // Reset the form fields
    setContactInfo({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="help-page">
      <Header />

      <div className="help-container">
        <header>
          <h1 className="help-head">Help Center</h1>
        </header>

        <main>
          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <ul className="faq-list">
              {questions.map((qa) => (
                <li key={qa.id}>
                  <h3>{qa.question}</h3>
                  <p>{qa.answer}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-section">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="contact-form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactInfo.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactInfo.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={contactInfo.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </main>
      </div>

      <footer className="help-footer">
        <p>"Where Will Your Next Adventure Take You?"</p>
      </footer>
    </div>
  );
}

export default Help;
