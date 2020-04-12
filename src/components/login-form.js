import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function LoginForm() {
  //State에 로그인에 필요한 데이터 저장
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  // 변수 이름 쉽게하기 위해
  const { email, password } = loginData;

  const checkBlank = () => {
    // 둘 중 하나라도 안 채워져 있을시 알림
    if (email === "" || password === "") {
      alert("빈칸채워주세요!!");
      return false;
    } else {
      alert("로그인 화면으로 이동해야하는데 아직 라우팅 방법을 모릅니다");
      return true;
    }
  };
  // 로그인 시도 함수
  const tryLogin = () => {
    if (checkBlank === false) {
      console.log("실패");
      return;
    }
  };

  // 값이 변경될 때
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
    console.log(name, value);
  };

  return (
    <Wrapper>
      <LoginTitle>로그인</LoginTitle>
      <InputWrapper>
        <InputLabel>EMAIL</InputLabel>
        <DataInput name="email" value={email} onChange={handleFormChange} />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>PASSWORD</InputLabel>
        <DataInput name="password" type="password" value={password} onChange={handleFormChange} />
      </InputWrapper>
      <LoginBtn onClick={tryLogin}>로그인</LoginBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 30rem;
  background-color: white;
  font-size: 18px;
  padding: 3rem 4rem;
`;

const LoginTitle = styled.p`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 3rem;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
`;

const InputLabel = styled.p`
  font-size: 1.5rem;
  padding: 0px;
  margin: 0px;
`;

const DataInput = styled.input`
  border: 1px solid rgb(97, 97, 97);
  padding: 0.5rem 0.8rem;
  width: 70%;
`;

const LoginBtn = styled.button`
  float: right;
  background: rgb(222, 222, 222);
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.3rem;
`;
