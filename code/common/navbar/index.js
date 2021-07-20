import React from "react";

const Navbar = ({ links, number }) => {
  return (
    <nav className="navbar screen">
      <div className="navbar-flex">
        <div className="navbar-logo"></div>
        <ul className="navbar-links">
          {links.map((link) => {
            return (
              <li>
                <a href={`#${link.value}`}>{link.name}</a>
              </li>
            );
          })}
        </ul>
        <p className="navbar-number">{number}</p>
      </div>
    </nav>
  );
};

export default Navbar;
