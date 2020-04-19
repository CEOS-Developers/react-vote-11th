import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export default function LoginForm({ setIsLoggedIn }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const resetForm = () => {
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
      })
      .catch(function (error) {
        resetForm();
        alert("로그인 실패!");
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <Title>로그인</Title>
      <InputWrapper>
        <Row>
          <Label>EMAIL</Label>
          <Input
            name="email"
            type="text"
            value={form.email}
            onChange={handleFormChange}
          />
        </Row>
        <Row>
          <Label>PASSWORD</Label>
          <Input
            name="password"
            value={form.password}
            onChange={handleFormChange}
            type="password"
          />
        </Row>
      </InputWrapper>
      <SubmitButton onClick={handleSubmit}>로그인</SubmitButton>
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
const Title = styled.p`
  font-weight: bold;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Input = styled.input`
  width: 50rem;
  height: 3rem;
`;
const Label = styled.label`
  font-size: 12px;
`;
const SubmitButton = styled.button`
  display: block;
  margin-left: auto;
  font-size: 1.8rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: 1rem none;
  outline: none;
`;
