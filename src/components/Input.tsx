import React from "react";

const Input = ({ label, type, name, onChange, value }: any) => {
  return (
    <input
      type={type ?? "text"}
      placeholder={label}
      className="input"
      onChange={onChange}
      value={value}
      name={name}
    />
  );
};

export default Input;
