/**
 * @author  sai
 * created  2024-06-10
 * project  coding-assignment-12-cra
 */

import React from "react";
import type { DefaultComponentProps } from "../../@types/app";

export type DropdownProps = Pick<DefaultComponentProps, "disabled"> & {
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: {
    label: string;
    value: string;
  }[];
};

export type StyledDropdownProps = Pick<DefaultComponentProps, "disabled"> & {};
