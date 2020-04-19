import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export default function VoteList({ name, voteCount, id, i, getCandidateList }) {
  const handleVote = () => {
    axios
      .put(process.env.API_HOST + `/candidates/${id}/vote/`, {
        params: {},
      })
      .then(function (response) {
        console.log(response);
        getCandidateList();
        alert(name + "님께 투표 했습니다!");
      })
      .catch(function (error) {
        console.log(error);
        alert("투표 실패했습니다!");
      });
  };

  return (
    <Wrapper>
      <Candidate>
        <Rank>{i}위:</Rank> {name} [{voteCount}]표
      </Candidate>
      <VoteButton onClick={handleVote}>투표</VoteButton>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Rank = styled.strong``;
const Candidate = styled.div``;
const VoteButton = styled.button`
  background-color: navy;
  color: white;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  display: block;
  margin-left: auto;
`;
