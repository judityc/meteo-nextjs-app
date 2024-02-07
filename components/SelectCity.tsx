"use client";

import { Select, Spinner } from "@chakra-ui/react";
import { useCities } from "../hooks/useCities";

interface Props {
  onSelectCity: (cityCode: string) => void;
}

const SelectCity = ({ onSelectCity }: Props) => {
  const { data: cities, error, isLoading } = useCities();

  if (error) return <p>{error}</p>;
  if (isLoading) return <Spinner />;

  return (
    <Select
      placeholder="Select City"
      maxW="660px"
      size="lg"
      onChange={(e) => onSelectCity(e.target.value)}
    >
      {cities?.map((city) => (
        <option key={city.code} value={city.code}>
          {city.name}
        </option>
      ))}
    </Select>
  );
};

export default SelectCity;
