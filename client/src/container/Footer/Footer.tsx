import React, { ChangeEvent, useState } from 'react';

import { images } from '../../constants';
import { client } from '../../client';
import { validateField } from '../../components/Validators';
import './Footer.scss';

export default function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [nameValidation, setNameValidation] = useState('');
  const [emailValidation, setEmailValidation] = useState('');
  const [messageValidation, setMessageValidation] = useState('');

  const handleChangeNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setNameValidation(validateField('name', name));
    setName(name);
  };

  const handleChangeEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmailValidation(validateField('email', email));
    setEmail(email);
  };

  const handleChangeMessageInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const message = e.target.value;
    setMessageValidation(validateField('message', message));
    setMessage(message);
  };

  const handleSubmit = () => {
    if (
      nameValidation !== 'valid' ||
      emailValidation !== 'valid' ||
      messageValidation !== 'valid'
    ) {
      console.log('error');
    } else {
      setLoading(true);

      const contact = {
        _type: 'contact',
        name: name,
        email: email,
        message: message,
      };

      client
        .create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:justinhwang92@gmail.com" className="p-text">
            justinhwang92@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +1 (757) 524-2349" className="p-text">
            +1 (757) 524-2349
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name *"
              value={name}
              onChange={handleChangeNameInput}
            />
            <input
              className="p-text"
              type="text"
              placeholder="Your Email *"
              value={email}
              onChange={handleChangeEmailInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message *"
              value={message}
              name={message}
              onChange={handleChangeMessageInput}
            />
          </div>
          {nameValidation !== 'valid' && <h3>{nameValidation}</h3>}
          {emailValidation !== 'valid' && <h3>{emailValidation}</h3>}
          {messageValidation !== 'valid' && <h3>{messageValidation}</h3>}
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? 'Sending' : 'Send Message'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
}
