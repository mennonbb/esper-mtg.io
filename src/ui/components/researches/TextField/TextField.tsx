import React from "react";
import { TextFieldStyled, TextFieldContainer } from "./TextField.style";
import { OutlinedTextFieldProps } from "@material-ui/core";

interface TextFieldProps extends OutlinedTextFieldProps {
  label: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  onChange,
  ...props
}) => {
  return (
    <TextFieldContainer>
      <TextFieldStyled
        {...props}
        label={label}
        value={value}
        onChange={onChange}
      />
    </TextFieldContainer>
  );
};

export default TextField;
