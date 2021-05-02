import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";

/* FOOTER */
const FooterContainer = styled.div`
  padding: 10rem 3rem;
  background-color: #37383d;
  width: 100%;
`;
const FooterNav = styled.div`
  list-style: none;
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
`;

const FooterItem = styled.div`
  margin-right: 4rem;
`;

const FooterLink = styled.div`
  font-size: 1.6rem;
  color: #eee;
  text-decoration: none;
  cursor: pointer;
`;

const FooterLogo = styled.div`
  height: 5rem;
  display: block;
  margin: 0 auto;
  margin-bottom: 5rem;
  margin-left: 600px;
  text-align: center;
  cursor: pointer;
`;

const FooterCopyright = styled.div`
  font-size: 1.4rem;
  color: #aaa;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterNav>
        <FooterItem>
          <FooterLink>About</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink>Pricing</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink>Terms of use</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink>Privacy Policy</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink>Careers</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink>Contact Us</FooterLink>
        </FooterItem>
      </FooterNav>
      <FooterLogo>
        <BrandLogo logoSize={60} logoText={30} />
      </FooterLogo>

      <FooterCopyright>Copyright by Jacques M.Tagu</FooterCopyright>
    </FooterContainer>
  );
}
