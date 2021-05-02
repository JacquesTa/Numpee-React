import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  border: none;
  outline: none;
  color: #fff;
  padding: 8px 1.5em;
  font-size: ${({ size }) => (size ? size + "px" : "18px")};
  font-weight: 600;
  border-radius: 3px;
  background-color: #5ec576;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin-right: 50px;

  &:hover {
    background-color: #4bbb7d;
  }
  &:focus {
    outline: none;
  }
`;
export function Button(props) {
  const { size } = props;
  return (
    <ButtonWrapper size={size} className={props.className}>
      {props.children}
    </ButtonWrapper>
  );
}
