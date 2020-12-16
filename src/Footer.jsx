import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="w-100 text-center">
        <p>
          © {year} Khan's Creatives. All Rights Reserved | Terms and Conditions
        </p>
      </footer>
    </div>
  );
};

export default Footer;
