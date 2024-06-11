/**
 * @author  sai
 * created  2024-06-10
 * project  coding-assignment-12-cra
 */

import React from "react";
import type { DefaultComponentProps } from "../../@types/app";

export type StyledRadioProps = Pick<DefaultComponentProps, "disabled"> & {
  backgroundColor?: string;
};

export type RadioProps = Pick<DefaultComponentProps, "disabled"> & {
  backgroundColor?: string;
  labelText: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
