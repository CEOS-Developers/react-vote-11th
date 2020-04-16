import React from "react";
import styled from "styled-components";

export default function CandidateForm(props) {
  const { name, voteCount, rank } = props;
  return (
    <Wrapper>
      <CandidateRank>
        {rank}
        <br />위
        <br />
        ..
      </CandidateRank>
      <CandidateDesc>
        {props.name}
        <br />
        {props.voteCount}표
      </CandidateDesc>

      <VoteBtn
        onClick={() => {
          alert(props.name);
        }}
      >
        투표
      </VoteBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const CandidateRank = styled.p``;
const CandidateDesc = styled.p`
  width: 20%;
`;
const VoteBtn = styled.button`
  background: blue;
  color: white;
  border: none;
  border-radius: 0.7rem;
  font-size: 2rem;
  width: 4rem;
  height: 6rem;
`;
