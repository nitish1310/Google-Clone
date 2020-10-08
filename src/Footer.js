import { Link } from "react-router-dom";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__header">
        <div className="footer__headerLeft">
          <Link to="/advertising">Advertising</Link>
          <Link to="/business">Business</Link>
          <Link to="/how-search-works">How Search works</Link>
        </div>
        <div className="footer__headerRight">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/settings">Settings</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
