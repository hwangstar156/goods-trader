import React, { useState } from "react";

const SignUpPage = () => {
  const [userCredential, setUserCredential] = useState({
    name: "",
    email: "",
    kakaoId: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, password, kakaoId, confirmPassword } = userCredential;
  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredential({
      ...userCredential,
      [name]: value,
    });
  };

  return (
    <>
      <form className="form-input">
        <input
          name="name"
          value={name}
          type="text"
          onChange={handleChange}
          placeholder="name"
          required
        />
        <input
          name="email"
          value={email}
          type="text"
          onChange={handleChange}
          placeholder="email"
          required
        />
        <input
          name="password"
          value={password}
          type="text"
          onChange={handleChange}
          placeholder="password"
          required
        />
        <input
          name="confirmPassword"
          value={confirmPassword}
          type="text"
          onChange={handleChange}
          placeholder="confirmPassword"
          required
        />
        <input
          name="kakaoId"
          value={kakaoId}
          type="text"
          onChange={handleChange}
          placeholder="kakaoId"
          required
        />
      </form>
    </>
  );
};

export default SignUpPage;
