/**
 * @author  sai
 * created  2024-05-27
 * project  coding-assignment-12-cra
 */

import React from "react";
import styled from "styled-components";

import type { StyledTableProps, TableProps } from "./Table.types";

const StyledTable = styled.table<StyledTableProps>`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin: 1rem;
`;

/**
 * @function Table
 * @param disabled
 * @param children
 * @constructor
 * @description Table component based on Styled components
 */
const Table: React.FC<TableProps> = ({ disabled, children }) => {
  return <StyledTable disabled={disabled}>{children}</StyledTable>;
};

export default Table;
