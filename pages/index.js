import React, { useState } from "react";
import styled from "styled-components";

import LoginForm from "../src/components/login-form";
import VoteForm from "../src/components/vote-form";

export default function Home() {
  const [login, setLogin] = useState(false);

  return (
    <Wrapper>
      <Header>리액트 투-표</Header>
      {!login && <LoginForm loginAccess={setLogin} />}
      {login && <VoteForm />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 10rem 40rem;
  background-color: Azure;
`;

const Header = styled.h1`
  font-size: 4rem;
`;
