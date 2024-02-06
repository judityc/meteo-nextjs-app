import { Button } from "@chakra-ui/button";
import { POSTS_PER_PAGE } from "../constants/constants";
import { CityForecast } from "../hooks/useCityForecast";

interface Props {
  data?: CityForecast;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination = ({ data, currentPage, setCurrentPage }: Props) => {
  const pageCount = data
    ? Math.ceil(data.forecastTimestamps.length / POSTS_PER_PAGE)
    : 0;

  return (
    <div>
      {Array(pageCount)
        .fill(0)
        .map((_, index) => {
          const page = index + 1;
          return (
            <Button
              key={index}
              onClick={() => {
                setCurrentPage(page);
              }}
              variant={currentPage === page ? "solid" : "ghost"}
              margin="5px"
            >
              {page}
            </Button>
          );
        })}
    </div>
  );
};

export default Pagination;
