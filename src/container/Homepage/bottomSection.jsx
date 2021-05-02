import React from "react";
import styled from "styled-components";
import { Button } from "../../components/button";

const BottomSectionContainer = styled.div`
  width: 100%;

  padding: 15rem 3rem;
  border-top: 1px solid #ddd;
  background-color: #e9e8e8;
  transition: transform 1s, opacity 1s;
  font-family: "Poppins";
`;

const SectionElementContainer = styled.div`
  max-width: 80rem;
  margin: 0rem auto 8rem auto;
`;

const SectionHeader = styled.div`
  font-size: 4rem;
  line-height: 1.3;
  font-weight: 500;
  text-align: center;
`;

export default function BottomSection() {
  return (
    <BottomSectionContainer>
      <SectionElementContainer>
        <SectionHeader>
          Join today and take your businness to the next level.
        </SectionHeader>
      </SectionElementContainer>
      <SectionHeader>
        <Button>Open your free account today!</Button>
      </SectionHeader>
    </BottomSectionContainer>
  );
}
