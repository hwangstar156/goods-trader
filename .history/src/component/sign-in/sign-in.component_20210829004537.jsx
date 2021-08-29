import React from "react";
import { useState } from "react";

const SignInPage = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginInput;
  const onChange = (e) => {
    const { name, value } = e.target;
    setLoginInput({
      ...loginInput,
      [name]: value,
    });
  };
  return (
    <div className="sign-in-page">
      <form className="sign-in-form">
        <input type="email" name="email" value={email} onChange={onChange} />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default SignInPage;
