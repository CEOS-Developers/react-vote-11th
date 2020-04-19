import React, { useState } from "react";

import axios from "axios";

import styled from "styled-components";

export default function LoginForm(props) {
  const { loginAccess } = props;

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userData;

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const checkData = () => {
    if (email === "" || password === "") {
      alert("모든 칸을 채워주세요.");
      return false;
    } else {
      return true;
    }
  };

  const submitData = () => {
    if (!checkData()) return;

    axios
      .post(process.env.API_HOST + "/auth/signin/", userData)
      .then(function (response) {
        console.log(response);
        alert("로그인에 성공하셨습니다!");
        loginAccess(true); //왜 loginAccess = ture;는 안될까요?
      })
      .catch(function (error) {
        if (error.response.status === 404) {
          alert("이메일이 존재하지 않습니다.");
          setUserData({
            email: "",
            password: "",
          });
          console.log(error.response);
          return;
        } else if (error.response.status === 422) {
          alert("비밀번호가 존재하지 않습니다.");
          setUserData({
            email,
            password: "",
          });
          console.log(error.response);
          return;
        }
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <Header>로그인</Header>
      <Row>
        <UserInfo>
          <Lable>EMAIL</Lable>
          <Input name="email" value={email} onChange={handleFormChange} />
        </UserInfo>
        <UserInfo>
          <Lable>PASSWORD</Lable>
          <Input
            name="password"
            type="password"
            value={password}
            onChange={handleFormChange}
          />
        </UserInfo>
      </Row>
      <SunmitButton onClick={submitData}>로그인</SunmitButton>
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

const Header = styled.h2`
  font-size: 3rem;
  margin-bottom: 4rem;
`;

const Row = styled.div`
  width: 100%;
`;

const Lable = styled.label`
  font-size: 2rem;
  margin-right: auto;
`;

const Input = styled.input`
  width: 75%;
  padding: 0.5rem 1rem;
  border: 1px, solid, grey;
  border-radius: 1rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 2rem;
`;

const SunmitButton = styled.button`
  display: block;
  margin-left: auto;
  font-size: 1.8rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: 0;
  outline: 0;
`;
