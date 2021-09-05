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
    photoUrl:
      "data:image/png;base64,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",
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
      signUpStart({
        email,
        password,
        displayName,
        kakaoId,
        confirmPassword,
        photoUrl,
      })
    );
  };

  return (
    <div className="sign-up-page">
      <h1 className="sign-up-title">
        Goods
        <strong>&nbsp;Trader</strong>
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
