import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signInWithFacebook } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";
import { selectUserError } from "../../redux/user/user.selector";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/user/user.action";

const SignInPage = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginInput;
  const signInError = useSelector(selectUserError);
  const dispatch = useDispatch();

  const hanldeUserError = (signInError) => {
    if (signInError) {
      switch (signInError.code) {
        case "auth/wrong-password":
          alert("비밀번호가 잘못되었습니다");
          return;
        case "auth/user-not-found":
          alert("없는 이메일 입니다");
          return;
        default:
          return;
      }
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setLoginInput({
      ...loginInput,
      [name]: value,
    });
  };

  const AfterLogin = () => {
    setLoginInput({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    hanldeUserError(signInError);
    return () => AfterLogin();
  }, [signInError]);

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  const handleGoogleSignIn = async () => {
    dispatch(googleSignInStart());
  };

  const handleFacebookSignIn = async () => {
    try {
      await signInWithFacebook();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="sign-in-page">
      <div className="sign-in-container">
        <div className="sign-in-detail">
          <h2>Welcome to Goods traders</h2>
          <div>
            <strong>Goods traders</strong>는 각종 아이돌 포토카드, 맞지 않는
            신발 사이즈의 교환을 목적으로 만들어진 사이트입니다.
          </div>
          <p>홈페이지 관련 문의 : hwangstar156@gmail.com</p>
        </div>
        <form className="sign-in-form" onSubmit={onSubmit}>
          <h2>Sign In</h2>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="email"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="password"
            id="password"
          />

          <Link to="/signup" className="sign-up-link">
            아직 계정이 없으신가요?
          </Link>

          <button type="submit" className="submit-btn">
            Login
          </button>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="google-btn btn"
          >
            <i className="fab fa-google"></i>
            Login with Google
          </button>

          <button
            type="button"
            onClick={handleFacebookSignIn}
            className="facebook-btn btn"
          >
            <i className="fab fa-facebook-square"></i>
            Login with Facebook
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
