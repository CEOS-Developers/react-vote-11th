import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios"
import Candidate from './candidate';



export default function CandidateList() {
  const [candidates, setCandidates] = useState([]);

  const getData = async () => {
    const response = await axios.get(process.env.API_HOST + '/candidates')
    return response.data
  }
  
  const sendVoteRequest = async (id) => {
    const response = await axios.put(process.env.API_HOST + `/candidates/${id}/vote`);
    return response.data
  }

  const handleVote = (id) => {
    sendVoteRequest(id).then(()=>{
      getData().then((data)=> {
        console.log('hhh')
        setCandidates(data);
      })
    })
  }


  useEffect(() => {
    getData().then((data) => {
      setCandidates(data);
    })
  }, [])

  return <Wrapper>
    <Title><Red>프론트엔드 인기쟁이</Red>는 누구?</Title>
    <SubTitle>CEOS 프론트엔드 개발자 인기 순위 및 투표 창입니다.</SubTitle>
    <Board>
      {candidates.sort((a, b) => {
        return b.voteCount - a.voteCount
      }).map((candidate, rank) => {
        return <Candidate rank={rank+1} {...candidate} handleVote={handleVote}></Candidate>
      })}
    </Board>
  </Wrapper>
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 30rem;
  background-color: white;
  font-size: 18px;
  padding: 3rem 4rem 10rem;
`

const Title = styled.h2`
  font-size: 3rem;
`

const Red = styled.span`
  color: red;
`

const SubTitle = styled.h3`
  font-size: 2.5rem;
  color: grey;
`

const Board = styled.div`
  width: 100%;
  padding: 5rem 10rem;
  border-width: 1px;
  border-style: solid;
  border-color: black;
  border-image: initial;
`