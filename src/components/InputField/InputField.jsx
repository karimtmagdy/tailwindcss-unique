import React from "react";

const InputField = ({
  children,
  className,
  label,
  placeholder,
  type,
  name,
  id,
  error,
  helperText,
  required,
  ...props
}) => {
  return (
    <fieldset>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        name={label}
        placeholder={placeholder}
        type={type}
        {...props}
      />
      <small>{helperText}</small>
    </fieldset>
  );
};

export default InputField;
