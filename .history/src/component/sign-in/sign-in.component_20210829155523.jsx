import React from "react";
import { useState } from "react";
import { auth } from "../../firebase/firebase.utils";
import { useHistory } from "react-router-dom";
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

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setLoginInput({
        ...loginInput,
        email: "",
        password: "",
      });
      alert("로그인 되었습니다");
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="sign-in-page">
      <div className="sign-in-container">
        <div className="sign-in-detail">
          <h2>Welcome to Goods traders</h2>
          <p>우리 홈페이지는 야코좆똥승우와 함께합니다.</p>
        </div>
        <form className="sign-in-form" onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="password"
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
