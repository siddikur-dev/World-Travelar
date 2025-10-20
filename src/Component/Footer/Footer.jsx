import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded-t-lg">
      <div>
        <h2 className="text-2xl font-bold">
          <span className="text-primary">World</span>
          <span className="text-secondary">Traveller</span>
        </h2>
        <p className="text-sm opacity-70">
          Explore the world with us — your next adventure starts here.
        </p>

        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} World Traveller. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
