"use client";
import Textfield from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import { TextfieldProps } from "./Textfield.component";

import closedEye from "@/../public/images/inputs/textfield/ClosedEye.svg";
import openEye from "@/../public/images/inputs/textfield/OpenEye.svg";
import Image from "next/image";

export const Password = ({ error, type, ...props }: TextfieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Textfield
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
