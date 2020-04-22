import { useState, useEffect } from "react";
import axios from "axios";

export const useCandidates = () => {
  // 로그인 데이터
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    // 로딩 시작, 에러 없음
    setIsLoading(true);
    setError(false);

    try {
      const data = await axios
        .get(process.env.API_HOST + "/candidates/", {
          params: {},
        })
        .then(function (response) {
          setIsLoading(false);
          return response.data;
        });
      setData(data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    // 로딩 끝
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { candidateList: data, isLoading, error, refetch: fetchData };
};
