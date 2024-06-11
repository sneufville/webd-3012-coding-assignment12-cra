/**
 * @author  sai
 * created  2024-06-10
 * project  coding-assignment-12-cra
 */

import React from "react";
import styled from "styled-components";
import type { CardProps, StyledCardProps } from "./Card.types";

const StyledCard = styled.div<StyledCardProps>`
  background-color: ${(props) => (props.disabled ? "#f4f4f4" : props.backgroundColor ?? "#1ea7fd")};
  border-radius: 5px;
  color: ${(props) => (props.disabled ? "#c0c0c0" : "#fff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0 0.5rem 0.5rem 0.5rem;
  &:hover {
    background-color: ${(props) => (props.disabled ? "#f5f5f5" : "#26aafd")};
    transition-duration: 300ms;
  }
`;

const Card: React.FC<CardProps> = ({
  backgroundColor,
  cardTitle,
  cardActions,
  cardContent,
  disabled,
}) => {
  return (
    <StyledCard
      backgroundColor={backgroundColor}
      disabled={disabled}
    >
      <h2>{cardTitle}</h2>
      {cardContent}
      {cardActions}
    </StyledCard>
  );
};

export default Card;
