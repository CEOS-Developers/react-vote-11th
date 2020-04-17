import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export default function VoteList({ id, name, voteCount }) {
  const Vote = () => {};
  return (
    <Wrapper>
      <Candidate>
        {id + 1}위: {name} [{voteCount}]표
      </Candidate>
      <VoteButton onClick={Vote()} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  min-height: 30rem;
  background-color: white;
  font-size: 18px;
  padding: 3rem 4rem;
`;

const Candidate = styled.div``;
const VoteButton = styled.button`
  width: 100%;
  min-height: 30rem;
  background-color: white;
  font-size: 18px;
  padding: 3rem 4rem;
`;
