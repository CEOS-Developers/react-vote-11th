import React, { useState } from "react";
import styled from "styled-components";

import { MemoizedLoginForm } from "../src/components/login-form";
import { MemoizedVoteForm } from "../src/components/vote-form";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Wrapper>
      <Title>리액트 투-표</Title>
      {!loggedIn && <MemoizedLoginForm loginSuccess={setLoggedIn} />}
      {loggedIn && <MemoizedVoteForm />}
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
