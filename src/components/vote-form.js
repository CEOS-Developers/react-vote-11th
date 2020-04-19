import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import CandidateCard from "./vote-list";
import { useCandidates } from "../hooks/Candidates";

export default function VoteForm() {
  const { candidates, loading, error, fetchData } = useCandidates();
  console.log(candidates);

  return (
    <Wrapper>
      <Title>
        <Red>프론트엔드 인기쟁이</Red>는 누구?
      </Title>
      <SubTitle>CEOS 프론트엔드 개발자 인기순위 및 투표창입니다.</SubTitle>
      <VoteSection>
        {candidates &&
          candidates
            .sort((a, b) => {
              return b.voteCount - a.voteCount;
            })
            .map((candidate, index) => {
              const { _id: id } = candidate;
              return (
                <CandidateCard
                  rank={index + 1}
                  key={id}
                  {...candidate}
                  getCandidateList={fetchData}
                />
              );
            })}
      </VoteSection>
    </Wrapper>
  );
}
export const MemoizedVoteForm = React.memo(VoteForm);

const Title = styled.h2``;
const Red = styled.strong`
  color: red;
`;
const SubTitle = styled.h3`
  color: grey;
`;
const VoteSection = styled.div`
  width: 100%;
  padding: 5rem 10rem;
  border: 1px solid black;
`;
const Wrapper = styled.div`
  width: 100%;
  min-height: 30rem;
  background-color: white;
  font-size: 18px;
  padding: 3rem 4rem;
`;
