/**
 * @author  sai
 * created  2024-05-27
 * project  coding-assignment-12-cra
 */
import styled from "styled-components";
import type { LabelProps, StyledLabelProps } from "./Label.types";

/**
 * @function Label
 * @param labelText
 * @constructor
 */
const StyledLabel = styled.label<StyledLabelProps>`
  align-items: center;
  background-color: ${(props) => (props.disabled ? "#f5f5f5" : "#1ea7fd")};
  border-color: #1ea7fd;
  border-radius: 5px;
  border-width: 1px;
  color: ${(props) => (props.disabled ? "#999" : "#fff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  transition-duration: 200ms;
  width: fit-content;
`;

/**
 * @function Label
 * @param disabled indicates if the component should be rendered as disabled
 * @param iconElement an optional icon component to be shown with the label text
 * @param labelText the content that should be displayed
 * @constructor
 */
const Label = ({ disabled, labelText, iconElement }: LabelProps) => {
  return (
    <StyledLabel disabled={disabled}>
      {iconElement}
      {labelText}
    </StyledLabel>
  );
};

export default Label;
