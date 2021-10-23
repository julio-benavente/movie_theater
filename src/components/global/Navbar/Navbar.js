import React from "react";
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
  const navLinks = () => {
    return links.map(({ name, className, path }) => {
      return (
        <NavbarItem className={className}>
          <NavbarLink to={path} activeClassName="active">
            {name}
          </NavbarLink>
        </NavbarItem>
      );
    });
  };

  return (
    <Navbar>
      <Logo>
        <p>Monkey</p>
        <p>Business</p>
      </Logo>
      <NavbarLinks>{navLinks()}</NavbarLinks>
    </Navbar>
  );
};

export default NavbarComponent;
