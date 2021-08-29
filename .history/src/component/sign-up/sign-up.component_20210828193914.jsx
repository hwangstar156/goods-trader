import React, { useState } from "react";

const SignUpPage = () => {
  const [userCredential, setUserCredential] = useState({
    name: "",
    email: "",
    kakaoId: "",
    password: "",
  });
  const { name, email, password, confirmPassword } = userCredentials;
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
      </form>
      <form className="form-input">
        <input
          name="name"
          value={name}
          type="text"
          onChange={handleChange}
          placeholder="name"
          required
        />
      </form>
      <form className="form-input">
        <input
          name="name"
          value={name}
          type="text"
          onChange={handleChange}
          placeholder="name"
          required
        />
      </form>
      <form className="form-input">
        <input
          name="name"
          value={name}
          type="text"
          onChange={handleChange}
          placeholder="name"
          required
        />
      </form>
    </>
  );
};
