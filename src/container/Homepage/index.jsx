import React from "react";
import styled from "styled-components";
import Footer from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { PageContainer } from "../pageContainer";
import BottomSection from "./bottomSection";
import MidSection from "./midSection";
import { TopSection } from "./topSection";

const Title = styled.h1`
  font-weight: 900;
  color: #000;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;
`;

export function HomePage(props) {
  return (
    <PageContainer>
      <TopSection>
        <Navbar />
      </TopSection>
      <MidSection />
      <BottomSection />
      <Footer />
    </PageContainer>
  );
}
