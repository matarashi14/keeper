import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Created by Motoki Atarashi</p>
      <p>&copy; {currentYear}</p>
    </footer>
  );
}

export default Footer;
