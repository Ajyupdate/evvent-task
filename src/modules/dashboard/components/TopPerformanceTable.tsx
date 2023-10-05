import {
  Avatar,
  Box,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaGreaterThan } from "react-icons/fa";

export interface TopPerfomanceTable {
  id: number;
  name: string;
  imageUrl: string;
  profit: number;
  status: string;
}
export interface iTopPerfomanceTable {
  dataArray: TopPerfomanceTable[];
}
export default function TopPerfomanceTable({ dataArray }: iTopPerfomanceTable) {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const displayData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return dataArray.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(dataArray.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const isSmallScreen = useBreakpointValue({ base: true, lg: false });

  return (
    <Box
      overflowY="auto"
      maxH={{ md: "500px" }}
      p={4}
      border="1px"
      borderColor="gray.200"
      rounded={"md"}
      shadow={"sm"}
    >
      <Flex justifyContent={"space-between"}>
        <Text fontWeight={"semibold"}>Top Perfomance (Monthly)</Text>
        <Text mt={1}>
          <FaGreaterThan />
        </Text>
      </Flex>

      <Grid
        display={{ md: "grid", base: "none" }}
        rounded={"lg"}
        p={2}
        mt={4}
        templateColumns="repeat(3, 1fr)"
        gap={2}
        fontWeight={"medium"}
        bg={"gray.100"}
      >
        <GridItem w="100%">Service</GridItem>
        <GridItem w="100%">
          <Flex justifyContent={"center"}>Profit</Flex>
        </GridItem>
        <GridItem w="100%">
          <Flex justifyContent={"center"}>Status</Flex>
        </GridItem>
      </Grid>

      {/* <Box p={4} border="1px" borderColor="gray.200" rounded={"md"} shadow={"sm"}>
  
        </Box> */}
      <Box>
        {isSmallScreen ? (
          // Pagination for small screens
          <>
            <SimpleGrid columns={1} spacing={4} mt={4}>
              {displayData().map((item) => (
                <Box key={item.id} borderWidth="1px" borderRadius="lg" p={4}>
                  <Grid templateColumns="100%" flexDirection={"column"} gap={2}>
                    <GridItem py={"-4"}>
                      <Text fontWeight="bold">Service:</Text>
                      <Avatar
                        name={item.name}
                        src={item.imageUrl}
                        size={"sm"}
                        borderRadius="md"
                        boxShadow="md"
                      />
                      <Text>{item.name}</Text>
                    </GridItem>

                    <GridItem py={2}>
                      <Text fontWeight="bold">Profit:</Text>
                      <Text color={"green.600"}>{item.profit} NOK</Text>
                    </GridItem>

                    <GridItem colSpan={1} py={2}>
                      <Text fontWeight="bold">Status:</Text>
                      <button
                        className={`font-medium rounded-md ${
                          item.status === "Active"
                            ? "bg-teal-200 text-teal-500"
                            : "bg-orange-100 text-orange-300"
                        }  px-2 `}
                        type="button"
                      >
                        {item.status}
                      </button>
                    </GridItem>
                  </Grid>
                </Box>
              ))}
            </SimpleGrid>
            <Box mt={4} display="flex" justifyContent="center">
              {Array.from({ length: totalPages }).map((_, index) => (
                // <Button
                //   key={index}
                //   size="sm"
                //   variant={currentPage === index + 1 ? "solid" : "outline"}
                //   colorScheme={currentPage === index + 1 ? "teal" : "gray"}
                //   onClick={() => handlePageChange(index + 1)}
                // >
                //   {index + 1}
                // </Button>
                <button
                  key={index}
                  className={`text-sm px-2 py-1 rounded ${
                    currentPage === index + 1
                      ? "bg-teal-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </Box>
          </>
        ) : (
          // Grid for large screens
          <Box>
            {dataArray.map((item) => (
              <Box
                key={item.id}
                borderWidth="1px"
                borderRadius="lg"
                my={2}
                p={1}
              >
                <Grid templateColumns="repeat(3, 1fr)" gap={2} pl={2}>
                  <GridItem colSpan={1} py={"-4"} mt={1}>
                    <Flex justifyContent={"space-between"}>
                      <Avatar
                        name={item.name}
                        src={item.imageUrl}
                        size={"sm"}
                        borderRadius="md"
                        boxShadow="md"
                      />
                      <Text ml={2}>{item.name.substring(0, 7)}...</Text>
                    </Flex>
                  </GridItem>
                  <GridItem py={2}>
                    <Flex justifyContent="center">
                      <Text color={"green.600"}>{item.profit} NOK</Text>
                    </Flex>
                  </GridItem>

                  <GridItem colSpan={1} py={2}>
                    <Flex justifyContent="center">
                      <button
                        className={`font-normal rounded-md ${
                          item.status === "Active"
                            ? "bg-teal-200 text-teal-700"
                            : "bg-orange-100 text-orange-300"
                        }  px-2 `}
                        type="button"
                      >
                        {item.status}
                      </button>
                    </Flex>
                  </GridItem>
                </Grid>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
