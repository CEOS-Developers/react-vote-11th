import React, { useEffect, useState } from "react";

import styled from "styled-components";
import axios from "axios";

export default function CandidateForm(props) {
  const { name, voteCount, rank, id } = props;

  const voteCandidate = () => {
    axios
      .put(process.env.API_HOST + "/candidates/" + id + "/vote/")
      .then(function (response) {
        console.log(response);
        alert(name + "님에게 투표완료.");
      })
      .catch(function (error) {
        console.log(error);
        alert("다시 시도해주세요.");
      });
  };

  return (
    <Wrapper>
      <Rank>{rank}위:</Rank>
      <Info>
        {name}[{voteCount}표]
      </Info>
      <VoteButton
        onClick={() => {
          voteCandidate();
        }}
      >
        투표
      </VoteButton>
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
