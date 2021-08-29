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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("비밀번호와 비밀번호 재확인이 맞지않습니다");
      return;
    }
  };
  return (
    <>
      <form className="form-input">
        <input
          name="name"
          value={name}
          type="text"
          onChange={handleChange}
          placeholder="사용자 이름"
          required
        />
        <input
          name="email"
          value={email}
          type="text"
          onChange={handleChange}
          placeholder="이메일"
          required
        />
        <input
          name="password"
          value={password}
          type="text"
          onChange={handleChange}
          placeholder="비밀번호"
          required
        />
        <input
          name="confirmPassword"
          value={confirmPassword}
          type="text"
          onChange={handleChange}
          placeholder="비밀번호 재확인"
          required
        />
        <input
          name="kakaoId"
          value={kakaoId}
          type="text"
          onChange={handleChange}
          placeholder="카카오톡 id"
          required
        />
        <button onSubmit={handleSubmit} className="submit-btn"></button>
      </form>
    </>
  );
};

export default SignUpPage;
