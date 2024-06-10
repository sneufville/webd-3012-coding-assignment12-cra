/**
 * @author  sai
 * created  2024-06-10
 * project  coding-assignment-12-cra
 */

import React from "react";
import styled from "styled-components";
import type { StyledTextProps, TextProps } from "./Text.types";

const StyledText = styled.span<StyledTextProps>`
  color: ${(props) => (props.disabled ? "#c0c0c0" : "#333")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
`;

const Text: React.FC<TextProps> = ({ content, disabled }) => {
  return <StyledText disabled={disabled}>{content}</StyledText>;
};

export default Text;
