import React from "react";

const FormInput = ({ handleChange, placeholder, ...otherProps }) => {
  return (
    <form>
      <input
        type="text"
        onChange={handleChange}
        placeholder={placeholder}
        {...otherProps}
      />
    </form>
  );
};
