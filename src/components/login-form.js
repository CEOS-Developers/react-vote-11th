import React, { useState, Memo } from "react";
import axios from "axios";
import styled from "styled-components";

export default function LoginForm(props) {
  //State에 로그인에 필요한 데이터 저장
  const [userData, setUserData] = useState({
    email: "example@ceos.or.kr",
    password: "example1!",
  });
  const { loginSuccess } = props;
  // 변수 이름 쉽게하기 위해
  const { email, password } = userData;

  const checkBlank = () => {
    // 둘 중 하나라도 안 채워져 있을시 알림
    if (email === "" || password === "") {
      alert("빈칸 채워주세요!!");
      return false;
    } else {
      return true;
    }
  };

  // 로그인 시도
  const tryLogin = () => {
    if (checkBlank() === false) {
      console.log("실패");
      return;
    }
    axios
      .post(process.env.API_HOST + "/auth/signin/", {
        email: email,
        password: password,
      })
      .then(function (response) {
        alert("로그인에 성공하셨습니다!!!");
        loginSuccess(true);
        console.log(response);
      })
      .catch(function (error) {
        if (error.response.status === 404) {
          alert("이메일이 존재하지 않습니다!!!");
          setUserData({
            email: "",
            password: "",
          });
        } else if (error.response.status === 422) {
          alert("비밀번호가 틀렸습니다!!!");
          setUserData({
            email: email,
            password: "",
          });
        } else {
          alert("다시 시도해주세요!");
          setUserData({
            email: "",
            password: "",
          });
        }
      });
  };

  // 값이 변경될 때
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
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
      <LoginBtn onClick={tryLogin} type="submit">
        로그인
      </LoginBtn>
    </Wrapper>
  );
}

export const MemoizedLoginForm = React.memo(LoginForm);

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
