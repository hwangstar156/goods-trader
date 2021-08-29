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
      <form className="sign-in-form" onSubmit={onSubmit}>
        <input type="email" name="email" value={email} onChange={onChange} />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default SignInPage;
