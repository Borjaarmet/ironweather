import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <button className="remove-bg" onClick={props.goBack}>
        <i className="fas fa-home"></i>
      </button>
    </nav>
  );
};

export default Navbar;
