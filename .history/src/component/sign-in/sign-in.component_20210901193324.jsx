import React from "react";
import { useState } from "react";
import { auth, signInWithFacebook } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";
import { signInwithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";
import { useEffect } from "react";
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

  const AfterLogin = () => {
    setLoginInput({
      email: "",
      password: "",
    });
  };
  useEffect(() => {
    return () => AfterLogin();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);

      console.log(user);
    } catch (err) {
      if (err.code === "auth/wrong-password") {
        alert("비밀번호가 잘못되었습니다");
      } else if (err.code === "auth/user-not-found") {
        alert("없는 이메일입니다");
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInwithGoogle();
    } catch (err) {
      console.log(err);
    }
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
          <p>우리 홈페이지는 야코좆똥승우와 함께합니다.</p>
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

          <button onClick={handleGoogleSignIn} className="google-btn btn">
            <i className="fab fa-google"></i>
            Login with Google
          </button>

          <button onClick={handleFacebookSignIn} className="facebook-btn btn">
            <i className="fab fa-facebook-square"></i>
            Login with Facebook
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
