import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import LoginForm from "../src/components/login-form";

import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const { userName } = router.query;
  return (
    <Wrapper>
      <Title>리액트 투-표</Title>
      <LoginForm />
      <Link href="/vote?userName=최수민">
        <a>투표하러가기</a>
      </Link>
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
