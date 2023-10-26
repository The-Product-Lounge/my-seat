import MuiTextfield, { OutlinedTextFieldProps } from "@mui/material/TextField";
import React from "react";
import { Password } from "./Password.component";
import { HelperTextError } from "./HelperTextError.component";

type TextFieldBaseProps = Omit<
  OutlinedTextFieldProps,
  "variant" | "error" | "helperText"
>;

export interface TextfieldProps extends TextFieldBaseProps {
  /**
   * Error message to display below the textfield.
   * If not provided, no error will be displayed.
   * Can be a string or a React node, for advanced formatting.
   * @type {string | React.ReactNode}
   * @memberof TextfieldProps
   * @default undefined
   * @optional
   * @example
   * <Textfield error="This is an error message" />
   * <Textfield error={<span>This is an error message</span>} />
   * <Textfield error={<span>This is an <strong>error</strong> message</span>} />
   * <Textfield error={<span>This is an <strong>error</strong> message with a <a href="https://www.google.com">link</a></span>} />
   */
  error?: string | React.ReactNode;
}

export const Textfield = ({ error, type, ...props }: TextfieldProps) => {
  // if error is string use HelperTextError component to display error message
  // if error is React node, display it as is
  if (typeof error === "string")
    error = <HelperTextError>{error}</HelperTextError>;

  if (type === "password")
    return (
      <>
        <Password {...props} error={error} type={type} />
      </>
    );
  return (
    <>
      <MuiTextfield
        {...props}
        error={!!error}
        helperText={error || undefined}
      />
    </>
  );
};
