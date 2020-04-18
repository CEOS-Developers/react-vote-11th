import React from "react";
import styled from "styled-components";
import axios from 'axios';

export default function Candidate({ rank, name, voteCount, _id, handleVote}) {
    console.log('id: ', _id)
    return <Wrapper>
        <Rank>{rank}위:</Rank>
        <Name>{name} [{voteCount}표]</Name>
        <VoteButton onClick={() => {handleVote(_id)}}>투표</VoteButton>
    </Wrapper>
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Rank = styled.strong`
    font-size: 2.5rem;
    width: 10rem;
    margin-bottom: 1rem;
`

const Name = styled.p`
    font-size: 2.5rem;
    margin: 0rem auto 1rem 0rem;
`

const VoteButton = styled.button`
    background-color: navy;
    color: white;
    font-size: 2rem;
    padding: 0.5rem 1rem;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    border-radius: 1rem;
`