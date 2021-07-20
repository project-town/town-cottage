import React from "react";

const LanguageSelect = ({ current, available_languages }) => {
  return (
    <div className="navbar-languages">
      <section className="navbar-languages-current">{current}</section>
      <ul className="navbar-languages-available">
        {available_languages.map(({ name, url }) => {
          return (
            <li>
              <a href={url}>{name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LanguageSelect;
