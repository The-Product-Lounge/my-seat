import React, { FC } from "react";
import MuiPaper, { PaperProps as MuiPaperProps } from "@mui/material/Paper";

export interface PaperProps extends MuiPaperProps {}

export const Paper = ({ children, ...rest }: PaperProps) => {
  return <MuiPaper {...rest}>{children}</MuiPaper>;
};
