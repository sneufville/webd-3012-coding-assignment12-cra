/**
 * @author  sai
 * created  2024-05-27
 * project  coding-assignment-12-cra
 */

import type { DefaultComponentProps } from "../../@types/app";

export type StyledButtonProps = DefaultComponentProps & {};

export type ButtonProps = Pick<DefaultComponentProps, "disabled"> & {
  backgroundColor?: string;
  titleText: string;
};
