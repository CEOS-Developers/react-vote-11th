import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import MemorizedLoginForm from "../src/components/login-form";
import MemorizedVoteForm from "../src/components/vote-form";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginCheck = () => {
    console.log("login check start");
    if (isLoggedIn) {
      console.log("dd");
      return <MemorizedVoteForm />;
    } else {
      return (
        <MemorizedLoginForm
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      );
    }
  };

  return (
    <Wrapper>
      <Title>리액트 투-표</Title>
      {loginCheck()}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 10rem 40rem;
  background-color: Azure;
`;
const Title = styled.h1`
  font-size: 4rem;
`;
