import React, { useState } from "react";
import styled from "styled-components";

import LoginForm from "../src/components/login-form";
import VoteForm from "../src/components/vote-form";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Wrapper>
      리액트 투-표
      {!loggedIn && <LoginForm loginSuccess={setLoggedIn} />}
      {loggedIn && <VoteForm />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 3rem;
  min-height: 100vh;
  padding: 10rem 40rem;
  background-color: Azure;
`;
