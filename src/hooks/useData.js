import React, { useEffect, useState } from "react";
import apiClient from "../../utils/api-client";

const useData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get(url)
      .then((res) => setData(res.data.data.data))
      .catch((e) => setError(e));
  }, []);

  return { data, error };
};

export default useData;
