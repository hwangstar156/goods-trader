import React, { useState } from "react";

const SignUpPage = () => {
  const [userCredential, setUserCredential] = useState({
    name: "",
    email: "",
    kakaoId: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredential({
      ...userCredential,
      [name]: value,
    });
  };

  return (
    <form className="form-input">
      <input
        type="text"
        onChange={handleChange}
        placeholder={placeholder}
        {...otherProps}
      />
    </form>
  );
};
