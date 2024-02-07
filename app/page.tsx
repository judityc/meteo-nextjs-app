"use client";

import styles from "./page.module.css";
import { Box, Heading } from "@chakra-ui/react";
import SelectCity from "../components/SelectCity";
import { useState } from "react";
import DataTable from "../components/DataTable";
import { useCityForecast } from "../hooks/useCityForecast";
import DataTableSkeleton from "../components/DataTableSkeleton";

export default function Home() {
  const [city, setCity] = useState("vilnius");

  const { data: cityForecast, error, isLoading } = useCityForecast(city);

  return (
    <>
      <Box className={styles.container}>
        <Heading as="h2" size="2xl">
          WEATHER APP
        </Heading>
        <SelectCity onSelectCity={(cityCode) => setCity(cityCode)} />
        <DataTable data={cityForecast} error={error} isLoading={isLoading} />
      </Box>
    </>
  );
}
