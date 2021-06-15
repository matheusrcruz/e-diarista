import React from "react";
import TextField from "../TextField/TextField";
import InputMask from "react-input-mask";
import { OutlinedTextFieldProps } from "@material-ui/core";

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
  mask: String;
}
//Abstrair o props.mask ... spread e props
const TextFieldMask: React.FC<TextFieldMaskProps> = ({ mask, ...props }) => {
  return (
    <InputMask mask={mask}>
      {() => {
        return <TextField {...props} />;
      }}
    </InputMask>
  );
};

export default TextFieldMask;
