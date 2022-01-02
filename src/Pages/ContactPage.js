import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Tittle from "../Components/Tittle";

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Tittle title={"Contact"} span={"Contact"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.779430187863!2d106.87445113013045!3d10.75147545200786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317523edaef55c31%3A0x4645bca5e90e4664!2zQ-G7rWEgSMOgbmcgS2ltIEtow60gxJBp4buHbiBNw6F5IEjGr-G7mk5HIERVWcOKTg!5e0!3m2!1sen!2s!4v1641045624042!5m2!1sen!2s"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            title="myFrame"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem icon={phone} text={"+329 29 2209"} title={"Phone"} />
          <ContactItem
            icon={email}
            text={"vongovantien@gmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text={"287 Nguyen Kiem, Ward 3, Go Vap district, Ho Chi Minh City"}
            title={"Address"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
