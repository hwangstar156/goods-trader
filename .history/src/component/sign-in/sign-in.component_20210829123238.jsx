import React from "react";
import { useState } from "react";
import { auth } from "../../firebase/firebase.utils";
import { createUserProfileDocument } from "../../firebase/firebase.utils";
import { useHistory } from "react-router-dom";
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

  const onSubmit = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        setLoginInput({
          ...loginInput,
          email: "",
          password: "",
        });
        alert("로그인 되었습니다");
        history.push("/");
      })
      .catch((err) => console.log(err));
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
