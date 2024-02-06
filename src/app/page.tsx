"use client";

import styles from "./page.module.css";
import { Box, Heading } from "@chakra-ui/react";
import SelectCity from "../../components/SelectCity";
import { useState } from "react";
import DataTable from "../../components/DataTable";
import { useCityForecast } from "../../hooks/useCityForecast";

export default function Home() {
  const [city, setCity] = useState("vilnius");

  const { data: cityForecast, error } = useCityForecast(city);

  return (
    <Box className={styles.container}>
      <Heading as="h2" size="2xl">
        WEATHER APP
      </Heading>
      <SelectCity onSelectCity={(cityCode) => setCity(cityCode)} />
      {error ? <Heading>{error}</Heading> : <DataTable data={cityForecast} />}
    </Box>
  );
}
