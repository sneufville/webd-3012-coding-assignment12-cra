/**
 * @author  sai
 * created  2024-06-10
 * project  coding-assignment-12-cra
 */

import React from "react";
import type { DefaultComponentProps } from "../../@types/app";

export type StyledCardProps = Pick<DefaultComponentProps, "disabled"> & {};

export type CardProps = Pick<DefaultComponentProps, "disabled"> & {
  backgroundColor?: string;
  cardTitle: string;
  cardContent?: React.ReactNode;
  cardActions?: React.ReactNode;
};
