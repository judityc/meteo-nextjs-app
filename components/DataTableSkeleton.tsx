import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Skeleton,
  Td,
  Tfoot,
} from "@chakra-ui/react";

const DataTableSkeleton = () => {
  const skeletons = [0, 1, 2, 3, 4, 5, 7, 8, 9, 10];

  return (
    <>
    <TableContainer width="1110px" height="621px">
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
          {skeletons.map((skeleton) => (
            <Tr key={skeleton}>
              <Td>
                <Skeleton height="25px" />
              </Td>
              <Td>
                <Skeleton height="25px" />
              </Td>
              <Td>
                <Skeleton height="25px" />
              </Td>
              <Td>
                <Skeleton height="25px" />
              </Td>
              <Td>
                <Skeleton height="25px" />
              </Td>
              <Td>
                <Skeleton height="25px" />
              </Td>
              <Td>
                <Skeleton height="25px" />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  </>
  );
};

export default DataTableSkeleton;
