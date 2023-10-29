"use client";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import MuiTextfield, { OutlinedTextFieldProps } from "@mui/material/TextField";
import React, { useState } from "react";
import { HelperTextError } from "./HelperTextError.component";

import closedEye from "@/../public/images/inputs/textfield/ClosedEye.svg";
import openEye from "@/../public/images/inputs/textfield/OpenEye.svg";
import Image from "next/image";

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

/**
 * Password textfield with toggle to show/hide password on click
 * @param {TextfieldProps} props
 * @returns {React.ReactElement}
 */
const Password = ({ error, type, ...props }: TextfieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <MuiTextfield
        {...props}
        error={!!error}
        helperText={error || undefined}
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
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
        }}
      />
    </>
  );
};
