import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import LoginForm from "../src/components/login-form";
import VoteForm from "../src/components/vote-form";

export default function Home() {
  const [isLoggedIn, setLoginStatus] = useState(false);
  const [candidates, setCandidateList] = useState({});

  const loginCheck = () => {
    console.log("login check start");
    if (isLoggedIn) {
      console.log("dd");
      return (
        <VoteForm
          getCandidateList={getCandidateList()}
          candidates={candidates}
        />
      );
    } else {
      return (
        <LoginForm isLoggedIn={isLoggedIn} setLoginStatus={setLoginStatus} />
      );
    }
  };

  const getCandidateList = async () => {
    console.log("함수 시작");
    const data = await axios
      .get(process.env.API_HOST + "/candidates/")
      .then(function (response) {
        console.log(response.data);
        setCandidateList(response.data);
        console.log("저장값");
        console.log(candidates);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
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
