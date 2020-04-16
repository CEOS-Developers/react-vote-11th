import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CandidateForm from "./candidate-form";

export default function VoteForm() {
  const [candidates, setCandidates] = useState(null);

  //useEffect는 렌더링 될때마다 실행, [] 인자에는 바뀔 떄마다 렌더링할 변수가 들어간다
  useEffect(() => {
    takeCandidates();
  }, []);
  console.log(takeCandidates);
  // axois에서 후보자 명단 받아온다.
  const takeCandidates = async () => {
    const data = await axios
      .get(process.env.API_HOST + "/candidates/", {
        params: {},
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    setCandidates(data);
  };
  if (candidates) {
    return (
      <Wrapper>
        <p>
          <RedText>프론트앤드 개발자</RedText> 인기 투표!
        </p>
        <p>CEOS 프론트엔드 개발자 인기 순위 및 투표 창입니다.</p>
        <CandidatesList>
          {candidates
            .sort((a, b) => {
              console.log(candidates.indexOf(a));
              return b.voteCount - a.voteCount;
            })
            .map((candidate) => (
              <CandidateForm
                key={candidate.id}
                rank={candidates.indexOf(candidate) + 1}
                name={candidate.name}
                voteCount={candidate.voteCount}
              />
            ))}
        </CandidatesList>
      </Wrapper>
    );
  }
  return <></>;
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 30rem;
  background-color: white;
  font-size: 18px;
  padding: 3rem 4rem;
`;

const RedText = styled.span`
  color: red;
`;

const CandidatesList = styled.div`
  padding: 5rem 10rem;
  border: 1px solid black;
`;
