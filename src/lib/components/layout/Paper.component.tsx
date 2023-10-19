import { styled } from "@mui/material/styles";
import React from "react";

const LoginPaper = styled("div")({
  padding: "24px",
  borderRadius: "16px",
  backgroundColor: "#fff",
  border: "0.5px solid #EBEBEB",
  opacity: "1",
  filter: "drop-shadow(#0000001A 0px 0.5px 2px)",
});

const LogoPaper = styled("div")({
  padding: "15px",
  borderRadius: "12px",
  backgroundColor: "#fff",
  border: "0.5px solid #E0E0E0",
  opacity: "1",
  filter: "drop-shadow(#0000000F 0px 8px 16px)",
});

/**
 * PaperProps interface
 * @param variant "logo" | "login"
 * @param children React.ReactNode
 */
interface PaperProps {
  /**
   * the variant to use
   * @type "logo" | "login"
   * @default "login"
   */
  variant: "logo" | "login";

  /**
   * The content of the component.
   * @type React.ReactNode
   */
  children: React.ReactNode;
}

/**
 * This component is used to render a paper component with a logo or login variant
 * @param props PaperProps {variant: "logo" | "login", children: React.ReactNode}
 * @returns React.ReactNode of the Paper component with the specified variant and children
 */
export const Paper = (props: PaperProps) => {
  if (props.variant === "logo") return <LogoPaper>{props.children}</LogoPaper>;
  return <LoginPaper>{props.children}</LoginPaper>;
};
