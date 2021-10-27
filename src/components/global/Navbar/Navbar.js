import React, { useState, useEffect } from "react";
import {
  Logo,
  Navbar,
  NavbarItem,
  NavbarLink,
  NavbarLinks,
} from "./NavbarStyles";

const links = [
  {
    name: "Home",
    className: "home",
    path: "/",
  },
  {
    name: "Most Popular",
    className: "mostPopular",
    path: "/#mostPopular",
  },
  {
    name: "By Genre",
    className: "byGenre",
    path: "/#byGenre",
  },
];

const NavbarComponent = () => {
  const [scrollY, setScrollY] = useState(0);
  const onChangeScrollYConstrain = 200;

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);
    // onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = () => {
    return links.map(({ name, className, path }) => {
      return (
        <NavbarItem className={className}>
          <NavbarLink
            to={path}
            activeClassName="active"
            size={`${scrollY > onChangeScrollYConstrain && "small"}`}
          >
            {name}
          </NavbarLink>
        </NavbarItem>
      );
    });
  };

  return (
    <Navbar size={`${scrollY > onChangeScrollYConstrain && "small"}`}>
      <Logo size={`${scrollY > onChangeScrollYConstrain && "small"}`}>
        <p>Monkey</p>
        <p>Business</p>
      </Logo>
      <NavbarLinks>{navLinks()}</NavbarLinks>
    </Navbar>
  );
};

export default NavbarComponent;
