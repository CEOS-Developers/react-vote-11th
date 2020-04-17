import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import List from "./vote-list";
export default function VoteForm() {
  const [candidates, setCandidateList] = useState([]);
  useEffect(() => {
    getCandidateList();
  }, []);
  const getCandidateList = async () => {
    await axios
      .get(process.env.API_HOST + "/candidates/", candidates)
      .then(({ data }) => {
        setCandidateList(data);
        console.log(candidates);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const Vote = (candidate) => {
    axios
      .put(
        process.env.API_HOST + "/candidates/" + candidate.id + "/vote/",
        voteCount
      )
      .then(({ data }) => {
        alert(candidate.name + "님께 투표했습니다!");
        getCandidates();
      })
      .catch(function (error) {
        console.log(error);
        alert("실패했습니다!");
      });
  };
  let i = 1;
  return (
    <Wrapper>
      <Title>
        <RedTitle>프론트엔드 인기쟁이</RedTitle>는 누구?
      </Title>
      <Desc>CEOS 프론트엔드 개발자 인기순위 및 투표창입니다.</Desc>
      <VoteSection>
        {candidates
          .sort((a, b) => {
            return b.voteCount - a.voteCount;
          })
          .map((candidate) => (
            <List
              key={candidate._id}
              id={candidate._id}
              i={i++}
              {...candidate}
              getCandidateList={getCandidateList}
            />
          ))}
      </VoteSection>
    </Wrapper>
  );
}
export const MemoizedVoteForm = React.memo(VoteForm);

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
