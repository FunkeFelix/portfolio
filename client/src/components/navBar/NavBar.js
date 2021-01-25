import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
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
          <Link
            to="profile"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="navLink"
          >
            Profile
          </Link>
          <Link
            to="education"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="navLink"
          >
            Education
          </Link>
          <Link
            to="work"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="navLink"
          >
            Work Experience
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="navLink"
          >
            Projects
          </Link>
        </nav>
      </header>
    </div>
  );
};
export default NavBar;
