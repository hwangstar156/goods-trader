import React, { useState } from "react";
import "./sign-up.styles.scss";
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
    <div className="sign-up-page">
      <h1 className="sign-up-title">
        Goods
        <strong>&nbsp; Trader</strong>
      </h1>
      <form className="form-input">
        <input
          className="sign-up-input"
          name="name"
          value={name}
          type="text"
          onChange={handleChange}
          placeholder="사용자 이름"
          required
        />
        <input
          className="sign-up-input"
          name="email"
          value={email}
          type="text"
          onChange={handleChange}
          placeholder="이메일"
          required
        />
        <input
          className="sign-up-input"
          name="password"
          value={password}
          type="text"
          onChange={handleChange}
          placeholder="비밀번호"
          required
        />
        <input
          className="sign-up-input"
          name="confirmPassword"
          value={confirmPassword}
          type="text"
          onChange={handleChange}
          placeholder="비밀번호 재확인"
          required
        />
        <input
          className="sign-up-input"
          name="kakaoId"
          value={kakaoId}
          type="text"
          onChange={handleChange}
          placeholder="카카오톡 id"
          required
        />
        <button onSubmit={handleSubmit} className="submit-btn">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;