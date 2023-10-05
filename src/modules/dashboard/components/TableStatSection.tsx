import { Grid, GridItem } from "@chakra-ui/react";
import TopPerfomanceTable from "./TopPerformanceTable";
import TransactionListTable from "./TransactionListTable";
const TransactionListData = [
  {
    id: 1,
    name: "Sophialee",
    userId: "234-567-890",
    amount: 1.25,
    date: new Date("2023-09-30"),
    status: "Pending",
  },
  {
    id: 2,
    name: "John Doe",
    userId: "334-567-890",
    amount: 2.256,
    date: new Date("2023-09-27"),
    status: "Ongoing",
  },
  {
    id: 3,
    name: "John Doe",
    userId: "434-567-890",
    amount: 3.244,
    date: new Date("2023-09-30"),
    status: "Pending",
  },
  {
    id: 4,
    name: "John Doe",
    userId: "534-567-890",
    amount: 1.23,
    date: new Date("2023-09-28"),
    status: "Pending",
  },
  {
    id: 5,
    name: "John Doe",
    userId: "634-567-890",
    amount: 1.002,
    date: new Date("2023-09-26"),
    status: "Pending",
  },
  {
    id: 6,
    name: "John Doe",
    userId: "734-567-890",
    amount: 1.456,
    date: new Date("2023-09-28"),
    status: "Ongoing",
  },
  {
    id: 7,
    name: "John Doe",
    userId: "834-567-890",
    amount: 2.345,
    date: new Date("2023-09-27"),
    status: "Pending",
  },
];

const PerformanceData = [
  {
    id: 1,
    name: "Sophialee",
    imageUrl: "https://bit.ly/dan-abramov",
    profit: 1.25,
    status: "Active",
  },
  {
    id: 2,
    name: "JohnDoe",
    imageUrl: "https://bit.ly/sage-adebayo",
    profit: 1.25,
    status: "Active",
  },
  {
    id: 3,
    name: "JdddsohnDoe",
    imageUrl: "https://bit.ly/kent-c-dodds",
    profit: 1.25,
    status: "Active",
  },
  {
    id: 4,
    name: "JohnDoedsd",
    imageUrl: "https://bit.ly/dan-abramov",
    profit: 1.25,
    status: "Active",
  },
  {
    id: 5,
    name: "JohnDoeddsdd",
    imageUrl: "https://bit.ly/sage-adebayo",
    profit: 1.25,
    status: "Active",
  },
  {
    id: 6,
    name: "errwwJohnDoe",
    imageUrl: "https://bit.ly/kent-c-dodds",
    profit: 1.25,
    status: "Active",
  },
  {
    id: 7,
    name: "JohnwwqeeDoe",
    imageUrl: "https://bit.ly/dan-abramov",
    profit: 1.25,
    status: "Active",
  },
];
function TableStatSection() {
  return (
    <Grid mt-2 templateColumns={{ base: "100%", md: "60% 40%" }} gap={4} mt={8}>
      <GridItem colSpan={1}>
        <TransactionListTable dataArray={TransactionListData} />
      </GridItem>
      <GridItem colSpan={1}>
        <TopPerfomanceTable dataArray={PerformanceData} />
      </GridItem>
    </Grid>
  );
}

export default TableStatSection;
