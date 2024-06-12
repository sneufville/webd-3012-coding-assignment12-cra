/**
 * @author  sai
 * created  2024-05-27
 * project  coding-assignment-12-cra
 */

import type { DefaultComponentProps } from "../../@types/app";

export type StyledButtonProps = DefaultComponentProps & {
  backgroundColor?: string;
};

export type ButtonProps = Pick<DefaultComponentProps, "disabled"> & {
  /**
   * Optionally sets the background color for the button
   */
  backgroundColor?: string;
  /**
   * What is shown on the button
   */
  titleText: string;
};
