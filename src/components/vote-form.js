import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import List from "../components/vote-list";
export default function VoteForm({ candidates }) {
  return (
    <Wrapper>
      <Title>
        <RedTitle>프론트엔드 인기쟁이</RedTitle>는 누구?
      </Title>
      <Desc>CEOS 프론트엔드 개발자 인기순위 및 투표창입니다.</Desc>
      <VoteSection>
        {/* {candidates
          .sort((a, b) => {
            return a.voteCount - b.voteCount;
          })
          .map((candidate) => (
            <List key={candidate.id} {...candidate} />
          ))} */}
      </VoteSection>
    </Wrapper>
  );
}
const Title = styled.h2``;
const RedTitle = styled.strong`
  color: red;
`;
const Desc = styled.h3`
  color: grey;
`;
const VoteSection = styled.div`
  width: 100%;
  padding: 5rem 10rem;
  border: 1px solid black initial;
`;
const Wrapper = styled.div`
  width: 100%;
  min-height: 30rem;
  background-color: white;
  font-size: 18px;
  padding: 3rem 4rem;
`;
