import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { fetchBoards } from "../../store/board";
import { fetchCards } from "../../store/card";
import { fetchLists } from "../../store/list";
import { login } from "../../store/session";

import { FormImg, LogoContainer, LogoImg } from "./BaseFormStyles";

import "./login.css";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 630px;
  background-color: #f9fafc;

  & > * {
    box-sizing: border-box;
  }
`;

const StyledLoginForm = styled.form`
  /* LOGIN FORM */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 590px; */
  height: 455px;
  width: 400px;
  padding: 25px 40px;
  border-radius: 3px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
  border: transparent;

  & > * > * {
    box-sizing: border-box;
  }
  & > #login-form-sign-up {
    text-decoration: none;
    color: #0052cc;
    font-size: 14px;
    &: hover {
      text-decoration: underline;
    }
  }
`;

const LoginError = styled.div`
  &#login-error {
    color: red;
  }
`;

const LoginHeader = styled.h1`
  font-size: 16px;
  margin: 10px 0px 25px;
  color: #5e6c84;
`;

const LoginInput = styled.input`
  width: 320px;
  height: 44px;
  padding: 7px;
  margin: 0px 0px 17px;
  background-color: #fafbfc;
  border: 2px solid #dfe1e6;
  outline-color: var(--input-outline-color);
  font-size: 14px;
  border-radius: 3px;
`;

const FormButton = styled.button`
  /* LOGIN BUTTON */
  &#form-login-btn {
    height: 35px;
    width: 320px;
    color: white;
    background-color: #5aac44;
    padding: 8px 18px;
    border-radius: 3px;
    border: transparent;
    font-weight: bold;
    &:hover {
      cursor: pointer;
      background-color: #61bd4f;
    }
  }
  /* DEMO BUTTON */
  &#demo-btn {
    width: 320px;
    height: 39px;
    margin: 0px 0px 12px;
    font-weight: bold;
    box-shadow: rgb(0 0 0 / 20%) 1px 1px 5px 0;
    border: transparent;
    background-color: #fff;
    color: rgba(0, 0, 0, 0.54);
    &:hover {
      cursor: pointer;
      background-color: #f9fafc;
    }
  }
`;

/*SEPARATOR */
const Separator = styled.div`
  &#or-separator {
    margin: 16px 0px 14px;
    height: 24px;
    color: #4d4d4d;
    font-size: 12px;
  }
  &#separator {
    border-top: 1px solid hsl(0, 0%, 80%);
    width: 317px;
    margin: 25px 0px 14px;
  }
`;

const LoginForm = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setError("Email or password is incorrrect");
    } else {
      await dispatch(fetchBoards());
      await dispatch(fetchLists());
      await dispatch(fetchCards());
    }
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    await dispatch(login("demo@aa.io", "password"));
    await dispatch(fetchBoards());
    await dispatch(fetchLists());
    await dispatch(fetchCards());
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <LogoContainer id="login-taskly-logo-container">
        <Link to="/">
          <LogoImg id="login-taskly-logo" src="/taskly.png" alt="Taskly" />
        </Link>
      </LogoContainer>
      <LoginContainer id="login-container">
        <StyledLoginForm id="login-form" onSubmit={onLogin}>
          <LoginError id="login-error">{error}</LoginError>
          <LoginHeader id="login-header">Log in to Taskly</LoginHeader>
          <div>
            {/* <label htmlFor='email'>Email</label> */}
            <LoginInput
              className="login-input"
              id="login-email"
              name="email"
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            {/* <label htmlFor='password'>Password</label> */}
            <LoginInput
              className="login-input"
              id="login-password"
              name="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={updatePassword}
            />
          </div>
          <FormButton id="form-login-btn" type="submit">
            Log in
          </FormButton>
          <Separator id="or-separator">OR</Separator>
          <FormButton id="demo-btn" onClick={demoLogin}>
            Continue as a demo user
          </FormButton>
          <Separator id="separator" />
          <Link id="login-form-sign-up" to="/sign-up">
            Sign up for an account{" "}
          </Link>
        </StyledLoginForm>
      </LoginContainer>
      <FormImg id="login-img-container">
        <FormImg id="login-img-1-container">
          <img src="https://i.imgur.com/AA8OHXu.png" alt="" />
        </FormImg>
        <FormImg id="login-img-2-container">
          <img src="https://i.imgur.com/jK6fFIJ.png" alt="" />
        </FormImg>
      </FormImg>
    </>
  );
};

export default LoginForm;
