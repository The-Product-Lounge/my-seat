"use client";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import MuiTextfield, {
  OutlinedTextFieldProps,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material/TextField";
import React, { useState } from "react";
import { HelperTextError } from "./HelperTextError.component";

import closedEye from "@/../public/images/inputs/textfield/ClosedEye.svg";
import openEye from "@/../public/images/inputs/textfield/OpenEye.svg";
import Image from "next/image";

type TextFieldBaseProps = Omit<OutlinedTextFieldProps, "variant" | "error">;

export interface TextFieldProps extends TextFieldBaseProps {
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

export const TextField = React.forwardRef(
  (
    { error, type, ...props }: TextFieldProps,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword = () => setShowPassword(!showPassword);

    // if error is string use HelperTextError component to display error message
    // if error is React node, display it as is
    if (typeof error === "string")
      error = <HelperTextError>{error}</HelperTextError>;

    const allProps: MuiTextFieldProps = {
      ...props,
      error: !!error,
      helperText: error,
    };

    return (
      <>
        <MuiTextfield
          {...allProps}
          ref={ref}
          FormHelperTextProps={{
            component: "div",
          }}
          // Check if type is password and if showPassword is true, then change type to text
          type={type === "password" && showPassword ? "text" : type}
          // If type is password, add an eye icon to toggle password visibility
          InputProps={
            type === "password"
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleTogglePassword}
                        onMouseDown={(event) => event.preventDefault()}
                        edge="end"
                      >
                        {showPassword ? (
                          <Image src={closedEye} alt="closed eye" />
                        ) : (
                          <Image src={openEye} alt="open eye" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }
              : undefined
          }
        />
      </>
    );
  },
);

TextField.displayName = "TextField";
