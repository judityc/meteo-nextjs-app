'use client'

import { useFetch } from "./useFetch";

interface CityForecastPlace {
  code: string;
  name: string;
  administrativeDivision: string;
  country: string;
  countryCode: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export interface CityForecastTimeStamp {
  forecastTimeUtc: string;
  airTemperature: number;
  feelsLikeTemperature: number;
  windSpeed: number;
  windGust: number;
  windDirection: number;
  cloudCover: number;
  seaLevelPressure: number;
  relativeHumidity: number;
  totalPrecipitation: number;
  conditionCode: string | null;
}

export interface CityForecast {
  place: CityForecastPlace;
  forecastType: string;
  forecastCreationTimeUtc: string;
  forecastTimestamps: CityForecastTimeStamp[];
}

export const useCityForecast = (city: string) =>
  useFetch<CityForecast>(`/places/${city}/forecasts/long-term`);
