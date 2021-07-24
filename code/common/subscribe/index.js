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
    success,
  } = props;

  return (
    <div className="subscribe">
      <Img
        src={handleUrl(image, _relativeURL, _ID)}
        customClassName="subscribe-bg"
      />

      <form className={`${formId} subscribe-form`}>
        {success}
        <div className="subscribe-overlay"></div>
        <div className="subscribe-form-body">{_body}</div>

        <div className="subscribe-form-flex flex-start">
          <section className="subscribe-form-section">
            <label htmlFor="name">{nameLabel}</label>
            <input
              type="text"
              name="name"
              placeholder={namePlaceholder}
              data-required={true}
            />
            <p className="subscribe-form-error name-error">{name_error}</p>
          </section>
          <section className="subscribe-form-section">
            <label htmlFor="phone">{phoneLabel}</label>
            <input
              data-type="phone"
              type="number"
              name="phone"
              placeholder={phonePlaceholder}
              data-required={true}
            />
            <p className="subscribe-form-error phone-error">{phone_error}</p>
          </section>
          <section className="subscribe-form-section">
            <label htmlFor="email">{emailLabel}</label>
            <input
              type="email"
              name="email"
              data-type="email"
              placeholder={emailPlaceholder}
              data-required={true}
            />
            <p className="subscribe-form-error email-error">{email_error}</p>
          </section>
          <div className="subscribe-form-section subscribe-form-submit">
            <button className="btn subscribe-form-submit-btn" type="submit">
              {btn}
            </button>
            <Loader customClassName="subscribe-loader" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
