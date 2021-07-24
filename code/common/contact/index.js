import React from "react";
import images from "../../../assets/js/images";
import { handleUrl } from "../../utils/url";
import Img from "../img/Img";
import Loader from "../loaders/loader";

function ContactForm({
  _body,
  text,
  section_1_label,
  section_1_placeholder,
  section_1_error,
  section_2_label,
  section_2_placeholder,
  section_2_error,
  section_3_label,
  section_3_placeholder,
  section_3_error,
  submitText,
  _relativeURL,
  _ID,
  success,
}) {
  return (
    <div className="contact">
      {success}
      <div className="contact-overlay"></div>
      <form className="contact-form flex">
        <button type="button" className="contact-form-close">
          <Img src={handleUrl(images.common.closeGray, _relativeURL, _ID)} />
        </button>
        {_body}
        <div className="contact-form-text">{text}</div>
        <div className="contact-form-sections">
          <section>
            <h4>{section_1_label}</h4>
            <input
              data-required="1"
              placeholder={section_1_placeholder}
              name="contactName"
              className="contact-form-input"
            />
            <p className="contactName-error">{section_1_error}</p>
          </section>

          <section>
            <h4>{section_2_label}</h4>
            <input
              data-required="1"
              placeholder={section_2_placeholder}
              name="contactPhone"
              type="number"
              data-type="phone"
              className="contact-form-input"
            />
            <p className="contactPhone-error">{section_2_error}</p>
          </section>
          <section>
            <h4>{section_3_label}</h4>
            <input
              data-type="email"
              data-required="1"
              placeholder={section_3_placeholder}
              name="contactEmail"
              className="contact-form-input"
            />
            <p className="contactEmail-error">{section_3_error}</p>
          </section>
        </div>
        <div className="contact-form-submit">
          <Loader customClassName="contact-form-submit-loader" />
          <input
            className="contact-form-submit-btn btn"
            type="submit"
            value={submitText}
          ></input>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
