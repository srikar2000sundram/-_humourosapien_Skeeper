import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ_humourosapien_ {year} </p>
    </footer>
  );
}

export default Footer;
