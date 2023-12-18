// button.component.tsx
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

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
	 * @default "600"
	 * @type "bold" | "normal" | "600"
	 * @memberof ButtonProps
	 * @optional
	 */
	fontWeight?: "bold" | "normal" | "600";

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

/**
 * Button component
 * @param {ButtonProps} props
 * @returns {React.ReactElement}
 */
export const Button: React.FC<ButtonProps> = ({
	children,
	isLoading,
	fontWeight,
	disabled,
	...props
}) => (
	<MuiButton
		{...props}
		sx={{
			fontWeight: fontWeight ?? "600",
		}}
		disabled={isLoading ?? disabled}
	>
		{isLoading ? <CircularProgress size={24} /> : children}
	</MuiButton>
);
