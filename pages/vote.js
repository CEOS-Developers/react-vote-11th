import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import VoteForm from "../src/components/vote-form";

export default function Home() {
  const router = useRouter();
  const { userName } = router.query;
  return (
    <Wrapper>
      <Title onClick={() => router.back()}>리액트 투-표</Title>
      <Name>{userName}</Name>님 안녕하세요!
      <VoteForm />
    </Wrapper>
  );
}

const Name = styled.span`
  color: blue;
`;

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
