import styled, { css } from "styled-components";
import { NavHashLink as Link } from "react-router-hash-link";
import { Container } from "../../../styles/globlaStyles";
import { transparentize } from "polished";

export const Navbar = styled(Container)`
  width: auto;
  grid-template-columns: auto 1fr;
  padding-top: 1rem;
  padding-bottom: 1rem;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.colors.white};
  z-index: 100;
  transition: ${(props) => props.theme.transitions.regular};

  // Small size
  ${(props) =>
    props.size === "small" &&
    css`
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    `}
`;

export const Logo = styled.div`
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
`;

export const NavbarItem = styled.div`
  &:not(:last-of-type) {
    margin-right: 10px;
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
