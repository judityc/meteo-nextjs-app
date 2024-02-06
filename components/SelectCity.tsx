'use client'

import { Select } from "@chakra-ui/react";
import { useCities } from "../hooks/useCities";

interface Props {
  onSelectCity: (cityCode: string) => void;
}

const SelectCity = ({ onSelectCity}: Props) => {
  const { data: cities, error } = useCities();

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
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
      )}
    </>
  );
};

export default SelectCity;
