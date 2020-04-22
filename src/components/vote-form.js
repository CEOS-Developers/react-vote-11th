import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CandidateForm from "./candidate-form";
import { useCandidates } from "./myHooks/candidates";

function VoteForm() {
  const { candidateList, isLoading, error, refetch } = useCandidates();
  if (error) {
    console.log(error);
    <div>{error}</div>;
  }
  if (candidateList)
    return (
      <Wrapper>
        <Title1>
          <RedText>프론트앤드 인기쟁이</RedText>는 누구?
        </Title1>
        <Title2>CEOS 프론트엔드 개발자 인기 순위 및 투표 창입니다.</Title2>
        <CandidateListWrapper>
          {candidateList &&
            candidateList
              .sort((a, b) => b.voteCount - a.voteCount)
              .map((candidate, index) => {
                const { _id: id, name, voteCount } = candidate;
                return (
                  <CandidateForm key={id} rank={index + 1} {...{ name, voteCount, id, refetch }} />
                );
              })}
        </CandidateListWrapper>
      </Wrapper>
    );
  return <></>;
}

export default React.memo(VoteForm);

const Wrapper = styled.div`
  width: 100%;
  min-height: 30rem;
  background-color: white;
  font-size: 18px;
  padding: 3rem 4rem;
`;
const Title1 = styled.p`
  font-size: 30px;
  font-weight: bolder;
`;

const Title2 = styled.p`
  font-size: 26px;
  font-weight: bolder;
  color: grey;
`;

const RedText = styled.span`
  color: red;
`;

const CandidateListWrapper = styled.div`
  padding: 5rem 10rem;
  border: 1px solid black;
`;
