// button.component.tsx
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "@mui/material/styles/styled";

// type ButtonBaseProps = Pick<
//   MuiButtonProps,
//   | "variant"
//   | "color"
//   | "children"
//   | "disabled"
//   | "fullWidth"
//   | "size"
//   | "onClick"
// >;

export interface ButtonProps extends MuiButtonProps {
  /**
   * Font weight of the button
   * @default "semiBold"
   * @type "bold" | "normal" | "semiBold"
   * @memberof ButtonProps
   * @optional
   */
  fontWeight?: "bold" | "normal" | "semiBold";

  /**
   * If true, the button will show a CircularProgress instead of the children
   * @default false
   * @type boolean
   * @memberof ButtonProps
   * @optional
   * @example
   * <Button isLoading />
   * <Button isLoading={false} />
   * <Button isLoading={true} />
   */
  isLoading?: boolean;
}

const StyledButton: React.FC<ButtonProps> = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== "fontWeight",
})<ButtonProps>(({ fontWeight }) => ({
  ...((fontWeight === "semiBold" && {
    fontWeight: 600,
  }) || { fontWeight }),
}));

export const Button: React.FC<ButtonProps> = ({
  children,
  isLoading,
  disabled,
  fontWeight,
  ...props
}) => (
  <StyledButton
    {...props}
    disabled={isLoading ?? disabled}
    fontWeight={fontWeight ?? "semiBold"}
  >
    {isLoading ? <CircularProgress size={24} /> : children}
  </StyledButton>
);
