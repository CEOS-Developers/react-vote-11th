import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios'

export default function LoginForm({ setIsLoggedIn }) {
  const [loginData, setLoginData] = useState({ email: "", password: "" })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    console.log(loginData);
  }


  const handleSubmit = () => {
    if (validateInput(loginData)) {
      axios.post(process.env.API_HOST + '/auth/signin', loginData).
        then((response) => {
          console.log(response.data)
          setIsLoggedIn(true)
        })
        .catch((error) => {
          console.error(error);
          alert('로그인에 실패했습니다')
        })
    }
  }

  const validateInput = (data) => {
    const { email, password } = data;
    if ((!email) || (!password)) {
      alert('폼을 다 채워주세요')
      return false;
    } else {
      return true;
    }
  }

  return <Wrapper>
    <Title>로그인</Title>
    <Row>
      <Label>EMAIL</Label>
      <Input name="email" onChange={handleInputChange} />
    </Row>
    <Row>
      <Label>PASSWORD</Label>
      <Input name="password" type="password" onChange={handleInputChange} />
    </Row>
    <Row>
      <div style={{ marginRight: 'auto' }}></div>
      <Button onClick={handleSubmit}>로그인</Button>
    </Row>

  </Wrapper>;
}

const Row = styled.div`
  margin-bottom: 10px;
  margin-top: 20px;
  font-size: 15px;
  display: flex;
`
const Label = styled.div`
  margin-right: auto;
`
const Input = styled.input`
  width: 75%;
  border: 1px solid grey;
  padding: 5px;
  outline: none;
`

const Wrapper = styled.div`
  width: 100%;
  min-height: 30rem;
  background-color: white;
  font-size: 18px;
  padding: 3rem 4rem;
`;

const Title = styled.div`
  font-size: 25px;
`

const Button = styled.button`
  outline:none;
  background-color:#d6d6d6;
  border-radius:3px;
  border:none;

  width: 150px;
  margin-left: auto;
  font-size: 15px;
  padding: 5px;
`
