/**
 * @author  sai
 * created  2024-06-10
 * project  coding-assignment-12-cra
 */

import type { DefaultComponentProps } from "../../@types/app";

export type StyledTextProps = Pick<DefaultComponentProps, "disabled"> & {
  backgroundColor?: string;
};

export type TextProps = Pick<DefaultComponentProps, "disabled"> & {
  backgroundColor?: string;
  content: string;
};
