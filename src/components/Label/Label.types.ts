/**
 * @author  sai
 * created  2024-05-27
 * project  coding-assignment-12-cra
 */
import type { DefaultComponentProps } from "../../@types/app";
import type { ReactNode } from "react";

export type StyledLabelProps = DefaultComponentProps & {};

export type LabelProps = Pick<DefaultComponentProps, "disabled"> & {
  iconElement?: ReactNode;
  labelText: string;
};
