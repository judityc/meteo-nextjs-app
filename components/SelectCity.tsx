'use client'

import { Select } from "@chakra-ui/react";
import { useCities } from "../hooks/useCities";
import { useState } from "react";

// interface Props {
//   onSelectCity: (cityCode: string) => void;
// }

const SelectCity = () => {
  const { data: cities, error } = useCities();
  const [city, setCity] = useState("vilnius");


  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <Select
          placeholder="Select City"
          maxW="660px"
          size="lg"
          onChange={(e) => setCity(e.target.value)}
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
