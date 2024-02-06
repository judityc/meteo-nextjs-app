'use client'

import { useFetch } from "./useFetch";

interface Cities {
  code: string;
  name: string;
  administrativeDivision: string;
  countryCode: string;
}

export const useCities = () => useFetch<Cities[]>("/places");
