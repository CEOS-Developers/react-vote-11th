import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CandidateForm from "./candidate-form";

export default function VoteForm() {
  const [candidateList, setCandidateList] = useState(null);

  // useEffect는 렌더링 될때마다 실행, [] 인자에는 바뀔 떄마다 렌더링할 변수가 들어간다
  // candidates의 값이 바뀔 때마다 렌더링한다.
  useEffect(() => {
    takeCandidateList();
  }, [candidateList]);

  // axois에서 후보자 명단 받아온다.

  const takeCandidateList = async () => {
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
    setCandidateList(data);
  };
  // candidates값이 null이 아니면

  return (
    <Wrapper>
      <Title1>
        <RedText>프론트앤드 인기쟁이</RedText>는 누구?
      </Title1>
      <Title2>CEOS 프론트엔드 개발자 인기 순위 및 투표 창입니다.</Title2>
      {candidateList !== null && (
        <CandidateListWrapper>
          {candidateList
            .sort((a, b) => {
              return b.voteCount - a.voteCount;
            })
            .map((candidate) => (
              <CandidateForm
                key={candidate._id}
                id={candidate._id}
                rank={candidateList.indexOf(candidate) + 1}
                name={candidate.name}
                voteCount={candidate.voteCount}
              />
            ))}
        </CandidateListWrapper>
      )}
    </Wrapper>
  );
}

export const MemoizedVoteForm = React.memo(VoteForm);

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
