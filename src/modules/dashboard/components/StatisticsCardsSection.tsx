import { Box, Card, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { FaGreaterThan } from "react-icons/fa";
import {
  HiMiniArrowTrendingDown,
  HiMiniArrowTrendingUp,
} from "react-icons/hi2";
export interface statDetailsProps {
  title: string;
  numOfServiceOrIncome: string;
  statPercent: string;
  LastMonthValue: string;
}

export interface IStatisticsCardProps {
  statDetails: statDetailsProps[];
}

export default function StatisticsCardComponents({
  statDetails,
}: IStatisticsCardProps) {
  return (
    <Box>
      <Grid
        templateColumns={{ base: "100%", md: "33% 33% 33% " }}
        mt={"4"}
        gap={"4"}
        flexWrap={"nowrap"}
        alignItems={"center"}
      >
        {statDetails.map((item) => {
          return (
            <GridItem key={item.title}>
              <Card
                p={"4"}
                boxShadow={"sm"}
                variant={"outline"}
                color={"black"}
              >
                <Flex justifyContent={"space-between"}>
                  {" "}
                  <Box fontWeight={"medium"}>{item.title}</Box>
                  <Box mt={1}>
                    <FaGreaterThan />
                  </Box>
                </Flex>
                <Flex
                  wrap={"nowrap"}
                  flexDirection={{ md: "row", base: "column" }}
                  justifyContent={"space-between"}
                  mt={8}
                >
                  <Box>
                    <Box
                      as="span"
                      // fontSize={"lg"}
                      // fontWeight={"bold"}
                      color={item.title === "Total Income" ? "green.600" : ""}
                    >
                      <Box as="span" fontSize={"x-large"} fontWeight={"bold"}>
                        {item.numOfServiceOrIncome}
                      </Box>

                      <Box as="span" fontSize={"x-large"} fontWeight={"bold"}>
                        {item.title !== "Total Income" ? " services" : " NOK"}
                      </Box>
                    </Box>
                    <Box>
                      <Box as="span">Last Month </Box>
                      {"  "}
                      <Box
                        ml={1}
                        as="span"
                        fontWeight={"bold"}
                        color={item.title === "Total Income" ? "green.600" : ""}
                      >
                        {item.LastMonthValue}
                        {"   "}
                        {item.title === "Total Income" ? "NOK" : ""}
                      </Box>
                    </Box>
                  </Box>
                  <Box mt={2}>
                    <button
                      className={`rounded-md px-1   ${
                        parseInt(item.statPercent) < 0
                          ? "bg-custom-red text-button-red"
                          : "bg-custom-teal text-teal-700"
                      }  `}
                      type="button"
                    >
                      <Flex justifyContent={"space-between"}>
                        <Text mt={1} fontWeight={"extrabold"}>
                          {parseInt(item.statPercent) < 0 ? (
                            <HiMiniArrowTrendingDown />
                          ) : (
                            <HiMiniArrowTrendingUp />
                          )}
                        </Text>

                        <Text px={2} fontWeight={"semibold"}>
                          {item.statPercent}%{" "}
                        </Text>
                      </Flex>
                    </button>
                  </Box>
                </Flex>
              </Card>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}
