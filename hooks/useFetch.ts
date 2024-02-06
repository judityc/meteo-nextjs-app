'use client'

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export const useFetch = <T>(endpoint: string) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<T>(endpoint)
      .then(({ data }) => setData(data))
      .catch((err) => setError(err?.message));
  }, [endpoint]);

  return { data, error };
};
