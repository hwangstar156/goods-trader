import React, { useState } from "react";
import { auth } from "../../firebase/firebase.utils";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
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
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        const ok = window.confirm(
          "회원가입이 완료되었습니다.로그인 페이지로 이동하겠습니까?"
        );
        if (ok) {
          history.push("/signin");
        } else {
          history.push("/");
        }
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          alert("이미 존재하는 이메일입니다");
        }
      });
  };
  return (
    <div className="sign-up-page">
      <h1 className="sign-up-title">
        Goods
        <strong>&nbsp; &nbsp;Trader</strong>
      </h1>
      <form className="form-input" onSubmit={handleSubmit}>
        <h3>회원가입</h3>
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
          type="email"
          onChange={handleChange}
          placeholder="이메일"
          required
        />
        <input
          className="sign-up-input"
          name="password"
          value={password}
          type="password"
          onChange={handleChange}
          placeholder="비밀번호"
          required
        />
        <input
          className="sign-up-input"
          name="confirmPassword"
          value={confirmPassword}
          type="password"
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
        <button className="submit-btn">회원가입</button>
      </form>
    </div>
  );
};

export default SignUpPage;
