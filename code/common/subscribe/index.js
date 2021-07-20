import React from "react";
import { handleUrl } from "../../utils/url";
import Img from "../img/Img";
import Loader from "../loaders/loader";

const Subscribe = (props) => {
  const {
    _body,
    nameLabel,
    namePlaceholder,
    phoneLabel,
    phonePlaceholder,
    btn,
    image,
    _relativeURL,
    _ID,
    name_error,
    phone_error,
    emailLabel,
    emailPlaceholder,
    email_error,
    formId,
  } = props;

  return (
    <div className="subscribe">
      <Img
        src={handleUrl(image, _relativeURL, _ID)}
        customClassName="subscribe-bg"
      />
      {/* {success} */}
      <form className={`${formId} subscribe-form`}>
        <div className="subscribe-form-body">{_body}</div>

        <div className="subscribe-form-flex flex-start">
          <section className="subscribe-form-section">
            <label htmlFor="name">{nameLabel}</label>
            <input type="text" name="name" placeholder={namePlaceholder} />
            <p className="subscribe-form-error name-error">{name_error}</p>
          </section>
          <section className="subscribe-form-section">
            <label htmlFor="phone">{phoneLabel}</label>
            <input type="text" name="phone" placeholder={phonePlaceholder} />
            <p className="subscribe-form-error phone-error">{phone_error}</p>
          </section>
          <section className="subscribe-form-section">
            <label htmlFor="email">{emailLabel}</label>
            <input type="email" name="email" placeholder={emailPlaceholder} />
            <p className="subscribe-form-error email-error">{email_error}</p>
          </section>
          <div className="subscribe-form-section subscribe-form-submit">
            <button className="btn subscribe-form-submit-btn" type="submit">
              {btn}
            </button>
            <Loader customClassName="subscribe-loader" />
            <h5 className="subscribe-success-text">Thank you!</h5>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
