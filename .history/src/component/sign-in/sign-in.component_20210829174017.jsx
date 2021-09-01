import React from "react";
import { useState } from "react";
import { auth } from "../../firebase/firebase.utils";
import { useHistory, Link } from "react-router-dom";
import { signInwithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";
const SignInPage = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginInput;
  const history = useHistory();
  const onChange = (e) => {
    const { name, value } = e.target;
    setLoginInput({
      ...loginInput,
      [name]: value,
    });
  };
  const AfterLoginSuccess = () => {
    setLoginInput({
      ...loginInput,
      email: "",
      password: "",
    });
    alert("로그인 되었습니다");
    history.push("/");
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      AfterLoginSuccess();
    } catch (err) {
      console.log(err);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInwithGoogle();
      AfterLoginSuccess();
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

          <button onClick={handleGoogleSignIn} className="google-btn">
            <i class="fab fa-google"></i>
            Login with Google
          </button>

          <button onClick={handleFacebookSignIn} classNamge="facebook-btn">
            <i class="fab fa-facebook-square"></i>
            Login with Facebook
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
