import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export default function LoginForm({ isLoggedIn, setIsLoggedIn, loginCheck }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const initForm = () => {
    setForm({ email: "", password: "" });
  };
  const validCheck = () => {
    if (form.email.length === 0 || form.password.length === 0) {
      alert("모든 항목을 입력하세요");
      return false;
    }
    return true;
  };
  const handleSubmit = () => {
    console.log(form);
    if (!validCheck) return;
    axios
      .post(process.env.API_HOST + "/auth/signin/", form)
      .then(function (response) {
        console.log(response);
        alert("로그인 성공!");
        setIsLoggedIn(true);
        console.log(isLoggedIn);
      })
      .catch(function (error) {
        initForm();
        alert("로그인 실패!");
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <LoginLabel>로그인</LoginLabel>
      <InfoInputArea>
        <EmailInputArea>
          <EmailLabel>EMAIL</EmailLabel>
          <EmailInput
            name="email"
            value={form.email}
            onChange={handleFormChange}
          />
        </EmailInputArea>
        <PasswordInputArea>
          <PasswordLabel>PASSWORD</PasswordLabel>
          <PasswordInput
            name="password"
            value={form.password}
            onChange={handleFormChange}
            type="password"
          />
        </PasswordInputArea>
      </InfoInputArea>
      <Submit onClick={handleSubmit}>로그인</Submit>
    </Wrapper>
  );
}
export const MemoizedLoginForm = React.memo(LoginForm);
const Wrapper = styled.div`
  width: 100
  min-height: 30rem;
  background-color: white;
  font-size: 18px;
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
`;
const LoginLabel = styled.p`
  font-weight: bold;
`;
const InfoInputArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const EmailInputArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const EmailInput = styled.input`
  width: 50rem;
  height: 3rem;
`;
const EmailLabel = styled.p`
  font-size: 12px;
`;
const PasswordInput = styled.input`
  width: 50rem;
  height: 3rem;
`;
const PasswordInputArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const PasswordLabel = styled.p`
  font-size: 12px;
`;
const Submit = styled.button`
  display: block;
  margin-left: auto;
  font-size: 1.8rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: 1rem none;
  outline: none;
`;
