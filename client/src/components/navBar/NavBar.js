import React, { useEffect, useState } from "react";
import "./NavBar.scss";

const NavBar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > window.innerHeight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }
  return (
    <div>
      <header className={navbarClasses.join(" ")}>
        <nav className="navigation">
          <a className="navLink" href="#profile">
            Profile
          </a>
          <a className="navLink" href="#education">
            Education
          </a>
          <a className="navLink" href="#work">
            Work Experience
          </a>
          <a className="navLink" href="#projects">
            Projects
          </a>
        </nav>
      </header>
    </div>
  );
};
export default NavBar;
