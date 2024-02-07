"use client";

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export const useFetch = <T>(endpoint: string) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<T>(endpoint)
      .then(({ data }) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err?.message);
        setIsLoading(false);
      });
  }, [endpoint]);

  return { data, error, isLoading };
};
