import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button";

const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  padding: 0 1.5em;
  justify-content: space-between;
  margin: 8px;
`;

const AccessibilityContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;
const AnchorLink = styled.a`
  margin-bottom: 8px;
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;
  margin: 10px;

  &:hover {
    filter: contrast(0.6);
  }
`;

const Separator = styled.div`
  min-height: 40%;
  width: 1px;
  background-color: #fff;
  margin: 10px;
`;

export function Navbar(props) {
  return (
    <NavbarContainer>
      <BrandLogo />
      <AccessibilityContainer>
        <AnchorLink>Statistics Portal</AnchorLink>
        <Separator />
        <Button size={12}>Register</Button>
      </AccessibilityContainer>
    </NavbarContainer>
  );
}
