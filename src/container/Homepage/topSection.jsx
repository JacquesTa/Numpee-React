import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../../components/brandLogo";
import { Button } from "../../components/button";
import TopSectionBackgroundImg from "../../images/bgg.jpg";
import TopSectionStatisticImg from "../../images/s-1.svg";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 800px;
  min-height: 100%;
  background: url(${TopSectionBackgroundImg}) no-repeat;
  background-position: 0px -150px;
  background-size: cover;

  text-align: center;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(86, 93, 95, 0.9);
  display: flex;
  flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StandoutImage = styled.div`
  width: 30em;
  height: 34em;
  img {
    width: 100%;
    height: 100%;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
// const Title = styled.h2`
//   margin: 0;
//   font-size: 24px;
//   color: #fff;
//   line-height: 1.7;
// `;

const SloganContainer = styled.div`
  margin-bottom: 10px;
  margin-top: 30px;
  text-align: start;
`;

const SloganText = styled.h3`
  margin: 0;
  line-height: 1.6;
  color: #fff;
  font-weight: 500;
  font-size: 35px;
  font-family: "Poppins";
`;

const MiniSloganText = styled.h3`
  margin: 0;
  color: #fff;
  font-weight: 400;
  font-size: 25px;
  padding-bottom: 15px;
  font-family: "Poppins";
`;

const Highlight = styled.span`
  background-image: linear-gradient(to top left, #39b385, #9be15d);
  transform: scale(1.07, 1.05) skewX(-15deg);
`;

export function TopSection(props) {
  const { children } = props;
  return (
    <TopSectionContainer>
      <BackgroundFilter>
        {children}
        <TopSectionInnerContainer>
          <LogoContainer>
            <BrandLogo logoSize={60} textSize={50} />
            <SloganContainer>
              <SloganText>
                Your <Highlight>Business</Highlight> insights{" "}
              </SloganText>
              <SloganText>
                {" "}
                into simple <Highlight>Numbers.</Highlight>
              </SloganText>
              <MiniSloganText>
                The simplest way to have your business in numbers.
              </MiniSloganText>
            </SloganContainer>
            <Button>Join Now</Button>
          </LogoContainer>
          <StandoutImage>
            <img src={TopSectionStatisticImg} alt="first statistic" />
          </StandoutImage>
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}
