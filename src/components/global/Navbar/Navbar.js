import React, { useState } from "react";
import useScrollY from "../../../hooks/useScrollY";
import useWindowSize from "../../../hooks/useWindowSize";
import { Link } from "react-router-dom";
import {
  Logo,
  NavWrapper,
  Navbar,
  NavbarItem,
  NavbarLink,
  NavbarLinks,
  ToggleMenu,
} from "./NavbarStyles";

// Assets
import navLinksList from "../../../data/navLinksList";
import { MdClose, MdMenu } from "react-icons/md";

const NavbarComponent = () => {
  const scrollY = useScrollY();
  const onChangeScrollYConstrain = 120;
  const { width } = useWindowSize();
  const windowIsSmall = width <= 900;

  const [toggleMenuIsOpen, setToggleMenuIsOpen] = useState(false);

  const navLinks = () => {
    return navLinksList.map(({ name, className, path }) => {
      return (
        <NavbarItem
          className={className}
          onClick={() => windowIsSmall && setToggleMenuIsOpen(false)}
        >
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
    <NavWrapper size={`${scrollY > onChangeScrollYConstrain && "small"}`}>
      <Navbar
        size={`${scrollY > onChangeScrollYConstrain && "small"}`}
        data-isOpen={toggleMenuIsOpen}
      >
        <Link to="/">
          <Logo size={`${scrollY > onChangeScrollYConstrain && "small"}`}>
            <p>Monkey</p>
            <p>Business</p>
          </Logo>
        </Link>
        <NavbarLinks
          windowIsSmall={windowIsSmall}
          data-isOpen={toggleMenuIsOpen}
        >
          {navLinks()}
        </NavbarLinks>

        <ToggleMenu
          onClick={() => setToggleMenuIsOpen(!toggleMenuIsOpen)}
          windowIsSmall={windowIsSmall}
          data-isOpen={toggleMenuIsOpen}
          data-size={`${scrollY > onChangeScrollYConstrain && "small"}`}
        >
          {toggleMenuIsOpen && <MdClose />}
          {!toggleMenuIsOpen && <MdMenu />}
        </ToggleMenu>
      </Navbar>
    </NavWrapper>
  );
};

export default NavbarComponent;
