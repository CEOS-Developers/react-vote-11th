import React, { useEffect, useState } from "react";

import CandidateForm from "./candidate-form";

import axios from "axios";
import styled from "styled-components";

export default function VoteForm(props) {
  return (
    <Wrapper>
      <Header1>
        <Strong>프론트앤드 인기쟁이는</Strong> 누구?
      </Header1>
      <Header2>CEOS 프론트엔드 개발자 인기 순위 및 투표 창입니다.</Header2>
      <CandidateListWrapper>
        <CandidateForm></CandidateForm>
      </CandidateListWrapper>
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
const Header1 = styled.h2`
  font-size: 30px;
  font-weight: bolder;
`;

const Strong = styled.strong`
  color: red;
`;

const Header2 = styled.p`
  font-size: 26px;
  font-weight: bolder;
  color: grey;
`;

const CandidateListWrapper = styled.div`
  padding: 5rem 10rem;
  border: 1px solid black;
`;
