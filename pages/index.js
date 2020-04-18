import React, { useState } from "react";
import styled from "styled-components";

import LoginForm from "../src/components/login-form";
import CandidateList from '../src/components/candidate-list'

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Wrapper>
      <Title>리액트 투-표</Title>
      {isLoggedIn ? <CandidateList /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 10rem 40rem;
  background-color: Azure;
  position:relative;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 4rem;
  margin-bottom: 20px;
`
