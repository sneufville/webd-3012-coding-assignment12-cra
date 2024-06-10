/**
 * @author  sai
 * created  2024-05-27
 * project  coding-assignment-12-cra
 */

import React from "react";
import type { DefaultComponentProps } from "../../@types/app";

export type StyledTableCellProps = DefaultComponentProps & {};
export type StyledTableRowProps = DefaultComponentProps & {};
export type StyledTableHeaderProps = DefaultComponentProps & {};
export type StyledTableBodyProps = DefaultComponentProps & {};
export type StyledTableFooterProps = DefaultComponentProps & {};
export type StyledTableProps = DefaultComponentProps & {};

export type TableCellProps = Pick<DefaultComponentProps, "disabled"> & {
  children: React.ReactNode;
  colSpan?: number;
};

export type TableRowProps = Pick<DefaultComponentProps, "disabled"> & {
  children?: React.ReactNode;
};

export type TableHeaderProps = Pick<DefaultComponentProps, "disabled"> & {
  children?: React.ReactNode;
};

export type TableBodyProps = Pick<DefaultComponentProps, "disabled"> & {
  children?: React.ReactNode;
};

export type TableFooterProps = Pick<DefaultComponentProps, "disabled"> & {
  children?: React.ReactNode;
};

export type TableProps = Pick<DefaultComponentProps, "disabled"> & {
  children?: React.ReactNode;
};
