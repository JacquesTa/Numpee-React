import React from "react";
import styled from "styled-components";
import MidSectionStatOneImg from "../../images/s-2.svg";
import MidSectionStatTwoImg from "../../images/s-3.svg";
import MidSectionStatThreeImg from "../../images/s-4.svg";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const MidSectionContainer = styled.div`
  width: 100%;

  padding: 15rem 3rem;
  border-top: 1px solid #ddd;
  background-color: #e9e8e8;
  transition: transform 1s, opacity 1s;
  font-family: "Poppins";
  font-family: "Poppins";
`;
const TitleContainer = styled.div`
  max-width: 80rem;
  margin: 0rem auto 8rem auto;
`;
const SectionTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #5ec576;
  margin-bottom: 1rem;
`;
const SectionDescription = styled.h3`
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 500;
  color: #3a3a3a;
`;
const ElementsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin: 0 12rem;
  align-items: start;
  justify-items: start;
  color: #3a3a3a;
`;

const ImageTextContainer = styled.div`
  align-self: center;
  justify-self: center;
  width: 90%;
  font-size: 1.5rem;
`;

const ImageContainer = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5ec5763a;
  height: 5.5rem;
  width: 5.5rem;
  border-radius: 50%;
  margin-bottom: 2rem;
`;
const TextContainer = styled.h4`
  font-size: 15px;
  font-weight: 400;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const TextTitleContainer = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: "Poppins";
`;

export default function MidSection() {
  return (
    <MidSectionContainer>
      <TitleContainer>
        <SectionTitle>Feature</SectionTitle>
        <SectionDescription>
          Be more effective at what you do best.
        </SectionDescription>
      </TitleContainer>

      <ElementsContainer>
        <ImageContainer>
          <img src={MidSectionStatOneImg} alt="first service image" />
        </ImageContainer>
        <ImageTextContainer>
          <IconContainer>
            <RiCheckboxBlankCircleFill />
          </IconContainer>
          <TextTitleContainer>
            Digital overview of your statistics
          </TextTitleContainer>

          <TextContainer>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            possimus blanditiis non similique quod! Ab, veritatis culpa in enim
            laudantium ducimus ad, alias eum doloremque aliquam id vero!
            Consequatur, error.
          </TextContainer>
        </ImageTextContainer>
      </ElementsContainer>
      <ElementsContainer>
        <ImageTextContainer>
          <IconContainer>
            <RiCheckboxBlankCircleFill />
          </IconContainer>
          <TextTitleContainer>
            Watch your shop go from Zero to Hero
          </TextTitleContainer>

          <TextContainer>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sit
            corrupti nam deleniti quia facilis explicabo reiciendis ad,
            voluptatibus, labore, iusto voluptas magni. Quam dolores velit,
            repudiandae non id necessitatibus!
          </TextContainer>
        </ImageTextContainer>
        <ImageContainer>
          <img src={MidSectionStatTwoImg} alt="first service image" />
        </ImageContainer>
      </ElementsContainer>
      <ElementsContainer>
        <ImageContainer>
          <img src={MidSectionStatThreeImg} alt="first service image" />
        </ImageContainer>
        <ImageTextContainer>
          <IconContainer>
            <RiCheckboxBlankCircleFill />
          </IconContainer>
          <TextTitleContainer>
            Learn from your best trimester of the year
          </TextTitleContainer>

          <TextContainer>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            magnam necessitatibus sit, molestias dicta deleniti explicabo nulla
            nihil unde, eaque cum perferendis pariatur dolorem eos, quia
            incidunt reiciendis omnis saepe.
          </TextContainer>
        </ImageTextContainer>
      </ElementsContainer>
    </MidSectionContainer>
  );
}
