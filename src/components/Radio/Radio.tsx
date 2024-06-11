/**
 * @author  sai
 * created  2024-06-10
 * project  coding-assignment-12-cra
 */

import React from "react";
import styled from "styled-components";
import type { RadioProps, StyledRadioProps } from "./Radio.types";

const StyledRadio = styled.input.attrs<StyledRadioProps>((props) => ({
  backgroundColor: props.disabled ? "#f5f5f5" : props.backgroundColor ?? "#fff",
  disabled: props.disabled,
}))`
  background-color: ${(props) => props.backgroundColor};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const Radio: React.FC<RadioProps> = ({ backgroundColor, disabled, onChange }) => {
  return (
    <StyledRadio
      backgroundColor={backgroundColor}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default Radio;
