import React, { useEffect, useState } from "react";
import apiClient from "../../utils/api-client";

const useData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get(url)
      .then((res) => {
        setData(res.data.data.data);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e);
        setIsLoading(false);
      });
  }, []);

  return { data, error, isLoading };
};

export default useData;
