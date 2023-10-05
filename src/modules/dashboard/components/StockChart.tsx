"use client";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { HiMiniArrowDownTray } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "",
    },
  },
};

const labels = [
  "17 - 24 Sep 2023",
  "25 - 1 Sep 2023",
  "2 - 9 Sep 2023",
  "10 - 17 Sep 2023",
  "18 - 25 Sep 2023",
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: labels.map(() => faker.number.int({ min: 25.0, max: 1000 })),
      borderColor: "rgb(237, 30, 121)",
      backgroundColor: "rgb(245, 142, 187)",
    },
  ],
};

export default function ApexChart() {
  return (
    <Box mt={12} width="100%">
      <Box
        w={"100%"}
        p={4}
        border="1px"
        borderColor="rgb(231,231,231)"
        rounded={"md"}
        shadow={"sm"}
      >
        <Flex justifyContent={"space-between"}>
          <Text fontWeight={"bold"}>Sales Statistics</Text>
          <HStack spacing={6} alignItems={"center"}>
            <button className="border flex  border-grey-500   hover:text-white hover:bg-pink-400 text-black text-xs w-full font-bold py-2 px-4 rounded-lg inline-flex items-center h-6">
              <span>Last Month</span>
              <Box ml={2}>
                <IoIosArrowDown />
              </Box>
            </button>

            <button
              type="button"
              className={`bg-custom-pink-500 flex font-bold items-center w-full py-1 px-1 text-base text-white transition duration-75 rounded-lg group hover:bg-pink-400 hover:text-white dark:text-white dark:hover:bg-gray-700`}
              aria-controls="dropdown-example"
            >
              <HiMiniArrowDownTray />
              <span className="flex-1 ml-3 text-left  whitespace-nowrap">
                Download CSV
              </span>
            </button>
          </HStack>
        </Flex>
        <Line options={options} data={data} />
        <Flex justifyContent={"center"}>
          <button className="border flex   border-pink-500   hover:text-white hover:bg-pink-400 text-pink-500 text-xs  font-bold py-2 px-4 rounded-lg inline-flex items-center h-8">
            <span>See More Statistics</span>
          </button>
        </Flex>
      </Box>
    </Box>
  );
}
