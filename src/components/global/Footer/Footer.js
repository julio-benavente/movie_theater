import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import {
  Footer,
  Logo,
  Headlines,
  FooterSection,
  SectionTitle,
} from "./FooterStyles";

const FooterComponent = () => {
  return (
    <Footer>
      <Headlines>
        <Logo>
          <p>Monkey</p>
          <p>Business</p>
        </Logo>
        <p className="headline">
          Do not miss any of the <span>premieres</span> we have for you
        </p>
      </Headlines>
      <FooterSection>
        <SectionTitle>
          <div className="rectangle"></div>
          <p>Explore</p>
        </SectionTitle>
        <HashLink to="/#home">Home</HashLink>
        <HashLink to="/#mostPopular">Most popular</HashLink>
        <HashLink to="/#byGenre">By genre</HashLink>
      </FooterSection>
      <FooterSection>
        <SectionTitle>
          <div className="rectangle"></div>
          <p>Social media</p>
        </SectionTitle>
        <Link target="_blank" to={{ pathname: "https://www.facebook.com/" }}>
          Facebook
        </Link>
        <Link target="_blank" to={{ pathname: "https://www.instagram.com/" }}>
          Instragram
        </Link>
        <Link target="_blank" to={{ pathname: "https://www.twitter.com/" }}>
          Twitter
        </Link>
      </FooterSection>
      <FooterSection>
        <SectionTitle>
          <div className="rectangle"></div>
          <p>Legal</p>
        </SectionTitle>
        <Link to="/terms_conditions">Terms and conditions</Link>
        <Link to="/privacy_policy">Privacy policy</Link>
      </FooterSection>
    </Footer>
  );
};

export default FooterComponent;
