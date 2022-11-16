import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Header({ text, bgColor, textColor }) {
  const headerStyles = { backgroundColor: bgColor, color: textColor };

  return (
    <header style={headerStyles}>
      <Link to="/" style={{ color: "#ff6a95", textDecorationLine: "none" }}>
        <h2>{text}</h2>{" "}
      </Link>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};
Header.prototype = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
