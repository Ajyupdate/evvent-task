import {
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

const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export interface TransactionListTable {
  id: number;
  name: string;
  userId: string;
  amount: number;
  date: Date;
  status: string;
}
export interface iTransactionListTable {
  dataArray: TransactionListTable[];
}
export default function TransactionListTable({
  dataArray,
}: iTransactionListTable) {
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
        <Text fontWeight={"semibold"}>Transaction List</Text>
        <Text mt={1}>
          <FaGreaterThan />
        </Text>
      </Flex>

      <Grid
        display={{ md: "grid", base: "none" }}
        rounded={"lg"}
        p={2}
        mt={4}
        templateColumns="repeat(4, 1fr)"
        gap={2}
        fontWeight={"medium"}
        bg={"gray.100"}
      >
        <GridItem w="100%">Transaction</GridItem>
        <GridItem w="100%">
          <Flex justifyContent={"center"}>Amount</Flex>
        </GridItem>
        <GridItem w="100%">
          <Flex justifyContent={"center"}>Date</Flex>
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
                    <GridItem>
                      <Text fontWeight="bold">Transaction:</Text>
                      <Text>{`${item.name} `}</Text>
                      <Text>({item.userId})</Text>
                    </GridItem>

                    <GridItem>
                      <Text fontWeight="bold">Amount Transacted:</Text>
                      <Text>{item.amount}NOK</Text>
                    </GridItem>
                    <GridItem>
                      <Text fontWeight="bold">Date:</Text>
                      <Text>{formatDate(item.date)}</Text>
                    </GridItem>
                    <GridItem>
                      <Text fontWeight="bold">Status:</Text>
                      <button
                        className={`font-medium rounded-md ${
                          item.status === "Pending"
                            ? "bg-red-200 text-red-500"
                            : "bg-orange-100 text-orange-300"
                        }  px-2 bg-red-200 text-red-500`}
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
                <Grid templateColumns="repeat(4, 1fr)" gap={2} pl={2}>
                  <GridItem colSpan={1} py={"-4"}>
                    <Text fontWeight="medium">{`${item.name} `}</Text>
                    <Text>{item.userId}</Text>
                  </GridItem>
                  <GridItem py={2}>
                    <Flex justifyContent="center">
                      <Text color={"green.600"}>{item.amount} NOK</Text>
                    </Flex>
                  </GridItem>
                  <GridItem py={2}>
                    <Flex justifyContent="center">
                      <Text color={"gray.500"}>{formatDate(item.date)}</Text>
                    </Flex>
                  </GridItem>
                  <GridItem colSpan={1} py={2}>
                    <Flex justifyContent="center">
                      <button
                        className={`font-medium rounded-md ${
                          item.status === "Pending"
                            ? "bg-red-200 text-red-500"
                            : "bg-pink-50 text-orange-300"
                        }  px-2 bg-red-200 text-red-500`}
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
