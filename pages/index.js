import React, { useState } from "react";
import styled from "styled-components";

import LoginForm from "../src/components/login-form";
import VoteForm from "../src/components/vote-form";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Wrapper>
      <Title>리액트 투-표</Title>
      {!isLoggedIn && <LoginForm loginSuccess={setIsLoggedIn} />}
      {isLoggedIn && <VoteForm />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 3rem;
  min-height: 100vh;
  padding: 10rem 40rem;
  background-color: Azure;
`;

const Title = styled.p`
  font-weight: bold;
  margin-bottom: 2rem;
`;
