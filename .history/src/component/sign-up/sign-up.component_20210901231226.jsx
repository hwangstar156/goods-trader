import React, { useState, useEffect } from "react";
import "./sign-up.styles.scss";
import { signUpStart } from "../../redux/user/user.action";
import { useDispatch, useSelector } from "react-redux";
import { selectUserError } from "../../redux/user/user.selector";
const SignUpPage = () => {
  const [userCredential, setUserCredential] = useState({
    displayName: "",
    email: "",
    kakaoId: "",
    password: "",
    confirmPassword: "",
    photoUrl: "",
  });
  const { displayName, email, password, kakaoId, confirmPassword, photoUrl } =
    userCredential;
  const signUpError = useSelector(selectUserError);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredential({
      ...userCredential,
      [name]: value,
    });
  };

  const handleSignupError = (signUpError) => {
    if (signUpError) {
      if (signUpError.code === "auth/email-already-in-use") {
        alert("이미 존재하는 이메일입니다");
      }
    }
  };

  useEffect(() => {
    handleSignupError(signUpError);
  }, [signUpError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("비밀번호와 비밀번호 재확인이 맞지않습니다");
      return;
    }
    dispatch(
      signUpStart(
        displayName,
        email,
        password,
        kakaoId,
        confirmPassword,
        photoUrl
      )
    );
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
          name="displayName"
          value={displayName}
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
          minLength="6"
        />
        <input
          className="sign-up-input"
          name="confirmPassword"
          value={confirmPassword}
          type="password"
          onChange={handleChange}
          placeholder="비밀번호 재확인"
          required
          minLength="6"
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
