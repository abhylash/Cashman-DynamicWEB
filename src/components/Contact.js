// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact__container bd-grid">
        <form action="" className="contact__form">
          <div className="contact__inputs">
            <div className="contact__content">
              <label for="name" className="contact__label"></label>
              <input type="text" className="contact__input" id="name" placeholder="Name" />
            </div>
            <div className="contact__content">
              <label for="email" className="contact__label"></label>
              <input type="email" className="contact__input" id="email" placeholder="Email"/>
            </div>
          </div>
          <div className="contact__content">
            <label for="message" className="contact__label"></label>
            <textarea id="message" rows="7" className="contact__input"></textarea>
          </div>
          <div>
            <button type="submit" className="button contact__button">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
