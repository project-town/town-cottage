import React from "react";

function Contact({ title, emailText, PhoneText, btn, phone }) {
  return (
    <div className="footer-contact">
      <p>{title}</p>
      <p>{emailText}</p>
      <p>{PhoneText}</p>
      <p>{phone}</p>
      {btn}
    </div>
  );
}

export default Contact;
