"use client";

import styles from "./page.module.css";
import { Box, Heading } from "@chakra-ui/react";
import SelectCity from "../components/SelectCity";
import { useState } from "react";
import DataTable from "../components/DataTable";
import { useCityForecast } from "../hooks/useCityForecast";
import { useSearchParams, useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const params = useSearchParams();
  const cityCode = params?.get("city_code");

  const [city, setCity] = useState(cityCode ?? "vilnius");
  const { data: cityForecast, error, isLoading } = useCityForecast(city);

  const handleSelectCity = (cityCode: string) => {
    setCity(cityCode);
    router.push(`/?city_code=${cityCode}`);
  };

  return (
    <>
      <Box className={styles.container}>
        <Heading as="h2" size="2xl">
          WEATHER APP
        </Heading>
        <SelectCity onSelectCity={handleSelectCity} />
        <DataTable data={cityForecast} error={error} isLoading={isLoading} />
      </Box>
    </>
  );
}
