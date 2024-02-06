import { IconType } from "react-icons";
import {
  BsCloudLightningRain,
  BsCloudSleetFill,
  BsCloudSnow,
  BsCloudSnowFill,
  BsFillCloudLightningRainFill,
  BsFillCloudRainHeavyFill,
} from "react-icons/bs";
import { IoIosCloudy } from "react-icons/io";
import { LuCloudFog } from "react-icons/lu";
import {
  TiWeatherCloudy,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherStormy,
  TiWeatherSunny,
} from "react-icons/ti";
import { WiHail, WiSleet } from "react-icons/wi";
import { CityForecastTimeStamp } from "../hooks/useCityForecast";

interface Props {
  conditionCode: CityForecastTimeStamp["conditionCode"];
  size?: string;
}

const conditionIcon: Record<string, IconType> = {
  clear: TiWeatherSunny,
  "partly-cloudy": TiWeatherCloudy,
  "cloudy-with-sunny-intervals": TiWeatherPartlySunny,
  cloudy: IoIosCloudy,
  thunder: TiWeatherStormy,
  "isolated-thunderstorms": BsCloudLightningRain,
  thunderstorms: BsCloudLightningRain,
  "heavy-rain-with-thunderstorms": BsFillCloudLightningRainFill,
  "light-rain": TiWeatherShower,
  rain: TiWeatherShower,
  "heavy-rain": BsFillCloudRainHeavyFill,
  "light-sleet": BsCloudSleetFill,
  sleet: BsCloudSleetFill,
  "freezing-rain": WiSleet,
  hail: WiHail,
  "light-snow": BsCloudSnow,
  snow: BsCloudSnow,
  "heavy-snow": BsCloudSnowFill,
  fog: LuCloudFog,
};

const WeatherCondition = ({ conditionCode, size }: Props) => {
  if (!conditionCode) {
    return null;
  }

  const Icon = conditionIcon[conditionCode];
  return <Icon size={size} />;
};

export default WeatherCondition;
