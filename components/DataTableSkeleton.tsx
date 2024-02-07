import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Skeleton,
  Td,
} from "@chakra-ui/react";

const DataTableSkeleton = () => {
  const skeletons = Array(11).fill(0);

  return (
    <>
      <TableContainer width="1110px" height="621px">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th width="213px">Date And Time</Th>
              <Th isNumeric>Temperature</Th>
              <Th isNumeric>Feel Temperature</Th>
              <Th isNumeric>Wind Speed</Th>
              <Th isNumeric>Wind Direction</Th>
              <Th isNumeric>Cloud Cover</Th>
              <Th>Conditions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {skeletons.map((_, index) => (
              <Tr key={index}>
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
