import React, { useEffect, useState } from "react";

import axios from "axios";
import styled from "styled-components";

export default function CandidateForm(props) {
  return (
    <Wrapper>
      <Rank></Rank>
      <Info></Info>
      <VoteButton>투표</VoteButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const Rank = styled.p`
  font-weight: bolder;
  font-size: 2.5rem;
  border: none;
`;
const Info = styled.p`
  font-size: 2.5rem;
  width: 40%;
  border: none;
`;
const VoteButton = styled.button`
  background: blue;
  color: white;
  border: none;
  border-radius: 0.7rem;
  font-size: 2rem;
  height: 3.5rem;
  width: 5.5rem;
`;
