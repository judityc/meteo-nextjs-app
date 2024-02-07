"use client";

import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tooltip,
} from "@chakra-ui/react";
import WeatherCondition from "./WeatherCondition";
import { POSTS_PER_PAGE } from "../constants/constants";
import { CityForecast } from "../hooks/useCityForecast";
import Pagination from "./Pagination";
import { useState } from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import DataTableSkeleton from "./DataTableSkeleton";

interface Props {
  data?: CityForecast;
  isLoading: boolean;
}

const DataTable = ({ data, isLoading }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      {isLoading ? (
        <DataTableSkeleton />
      ) : (
        <TableContainer maxWidth="1110px" height="621px">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Date And Time</Th>
                <Th isNumeric>Temperature</Th>
                <Th isNumeric>Feel Temperature</Th>
                <Th isNumeric>Wind Speed</Th>
                <Th isNumeric>Wind Direction</Th>
                <Th isNumeric>Cloud Cover</Th>
                <Th>Conditions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.forecastTimestamps
                .slice(
                  (currentPage - 1) * POSTS_PER_PAGE,
                  currentPage * POSTS_PER_PAGE
                )
                .map((stamp, index) => (
                  <Tr key={index}>
                    <Td>{stamp.forecastTimeUtc}</Td>
                    <Td>{stamp.airTemperature} °C</Td>
                    <Td>{stamp.feelsLikeTemperature} °C</Td>
                    <Td>{stamp.windSpeed} m/s</Td>
                    <Td>
                      <FaLongArrowAltDown
                        style={{
                          transform: `rotate(${stamp.windDirection}deg)`,
                        }}
                      />
                    </Td>
                    <Td>{stamp.cloudCover} %</Td>
                    <Td>
                      <Tooltip
                        label={stamp.conditionCode}
                        aria-label="A tooltip"
                      >
                        <div>
                          <WeatherCondition
                            conditionCode={stamp.conditionCode}
                            size="25px"
                          />
                        </div>
                      </Tooltip>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
      <Pagination
        data={data}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default DataTable;
