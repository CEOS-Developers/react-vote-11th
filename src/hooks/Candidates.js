import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export const useCandidates = () => {
  const [candidates, setCandidateList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchData = async () => {
    setError(false);
    setLoading(true);

    try {
      await axios
        .get(process.env.API_HOST + "/candidates/", candidates)
        .then(({ data }) => {
          setCandidateList(data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { candidates, loading, error, fetchData };
};
