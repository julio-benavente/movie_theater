import styled, { css } from "styled-components";
import { NavHashLink as Link } from "react-router-hash-link";
import { Container } from "../../../styles/globlaStyles";
import { transparentize } from "polished";

export const NavWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export const Navbar = styled(Container)`
  width: 100%;
  grid-template-columns: auto 1fr;
  padding-top: 1rem;
  padding-bottom: 1rem;
  position: absolute;
  background-color: ${(props) => props.theme.colors.white};
  transition: ${(props) => props.theme.transitions.slow};

  ${(props) =>
    props.size === "small" &&
    css`
      padding-top: 10px;
      padding-bottom: 10px;
    `}

  @media screen and (max-width: 900px) {
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;

    &[data-isOpen="true"] {
      height: 100vh;
    }
  }
`;

export const Logo = styled.div`
  display: grid;
  justify-content: start;

  p {
    font-size: 2rem;
    font-weight: 900;
    line-height: 100%;
    color: ${(props) => props.theme.colors.primary};
    text-transform: uppercase;
    transition: ${(props) => props.theme.transitions.regular};

    &:nth-child(2) {
      color: ${(props) => props.theme.colors.secondary};
    }
  }

  // Small size
  ${(props) =>
    props.size === "small" &&
    css`
      p {
        font-size: 1.4rem;
      }
    `}
`;

export const NavbarLinks = styled.div`
  display: grid;
  justify-content: end;
  align-content: center;
  grid-auto-flow: column;
  grid-auto-columns: auto;

  @media screen and (max-width: 900px) {
    display: none;
    grid-auto-flow: row;
    justify-content: center;
    gap: 1rem;

    &[data-isOpen="true"] {
      display: grid;
    }
  }
`;

export const NavbarItem = styled.div`
  &:not(:last-of-type) {
    margin-right: 10px;
  }

  @media screen and (max-width: 900px) {
    text-align: center;
    &:not(:last-of-type) {
      margin-right: 0px;
    }
  }
`;

export const NavbarLink = styled(Link)`
  display: grid;
  padding: 10px 20px;
  color: ${(props) => props.theme.colors.primary};
  font-size: 0.9rem;
  transition: ${(props) => props.theme.transitions.regular};

  &.active,
  &:hover {
    background-color: ${(props) =>
      transparentize(0.7, props.theme.colors.secondary)};
    border-radius: 5px;
  }

  &.active {
    font-weight: 700;
  }

  // Small size
  ${(props) =>
    props.size === "small" &&
    css`
      padding: 5px 10px;
    `}
`;

export const ToggleMenu = styled.div`
  display: none;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-content: center;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  justify-self: end;
  align-self: center;
  cursor: pointer;
  position: absolute;
  right: clamp(10px, 7vw, 50px);
  margin: 1px;
  top: 1rem;
  transition: top 200ms ease-in-out;

  svg {
    width: 25px;
    height: 25px;
    color: ${(props) => props.theme.colors.secondary};
  }

  &[data-size="small"] {
    top: 8px;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.secondary};
    margin: 0px;
  }

  @media screen and (max-width: 900px) {
    display: grid;
  }
`;
