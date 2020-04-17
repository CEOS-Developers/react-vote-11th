import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function CandidateForm(props) {
  const { name, voteCount, rank, id } = props;

  const voteCandidate = () => {
    axios
      .put(process.env.API_HOST + "/candidates/" + id + "/vote/", {
        params: {},
      })
      .then(function (response) {
        console.log(response);
        // return response.data;
      })
      .catch(function (error) {
        console.log(error);
        alert("투표 실패!");
      })
      .finally(function () {
        // always executed
      });
  };
  return (
    <Wrapper>
      <CandidateRank>{rank}위:</CandidateRank>
      <CandidateDesc>
        {name}[{voteCount}표]
      </CandidateDesc>

      <VoteBtn
        onClick={() => {
          alert(name + "님에게 투표 완료!");
          voteCandidate();
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
  align-items: center;
  flex-direction: row;
`;

const CandidateRank = styled.p`
  font-weight: bolder;
  font-size: 2.5rem;
  border: none;
  margin: none;
`;
const CandidateDesc = styled.p`
  font-size: 2.5rem;
  width: 40%;
  border: none;
  margin: none;
`;
const VoteBtn = styled.button`
  background: blue;
  color: white;
  border: none;
  border-radius: 0.7rem;
  font-size: 2rem;
  height: 3.5rem;
  width: 5.5rem;
  margin: none;
`;
