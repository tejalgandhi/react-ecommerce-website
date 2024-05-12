import React, { useEffect, useState } from "react";
import apiClient from "../../utils/api-client";

const useData = (endPoint, customConfig, deps = []) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get(endPoint, customConfig)
      .then((res) => {
        setData(res.data.data);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e);
        setIsLoading(false);
      });
  }, deps);
  return { data, error, isLoading };
};

export default useData;
