import React from "react";
import './contact.css'

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Send me a message</h2>

      <div className="conatact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's Talk</h3>
          <p className="contact__details">Sent An Email</p>
        </div>

        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__input"
                placeholder="Nom"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__input"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input type="text" className="contact__input" placeholder="Sujet" />
          </div>

          <div className="contact__form-div contact__form-aera">
            <textarea
              name=""
              cols="30"
              rows="10"
              className="contact__input"
              placeholder="Message"
              id=""
            ></textarea>
          </div>

          <button className="btn">Envoyer</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
