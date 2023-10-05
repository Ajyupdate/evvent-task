"use client";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Avatar, Box } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { AiFillDollarCircle, AiFillMessage } from "react-icons/ai";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { MdHomeRepairService } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
export default function PageLayout({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const closeSidebar = () => {
    const sidebar = document.getElementById("sidebar-multi-level-sidebar");
    sidebar?.classList.add("-translate-x-full");
  };
  return (
    <Box>
      <div className="flex justify-start">
        <button
          data-drawer-target="sidebar-multi-level-sidebar"
          data-drawer-toggle="sidebar-multi-level-sidebar"
          aria-controls="sidebar-multi-level-sidebar"
          type="button"
          className="absolute top-0 inline-flex items-center p-2 mt-8 mr-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      </div>
      <aside
        id="sidebar-multi-level-sidebar"
        className=" rounded-lg  shadow-md  absolute top-0 md:top-0  left-0 z-40 w-64  transition-transform -translate-x-full sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <button
          onClick={closeSidebar}
          className="md:hidden absolute top-0 right-0"
        >
          X
        </button>
        <div className="mt-2  h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 flex flex-col  ">
          <div className="flex justify-center">
            <button className="h-12 bg-custom-pink-500 hover:bg-pink-700 text-white font-extrabold py-2 px-4 rounded-lg">
              evvent.no
            </button>
          </div>

          <div className="mt-8">
            <ul className="space-y-2 font-medium">
              <li>
                <button
                  type="button"
                  className={`${
                    pathName === "/" ? "bg-black text-white" : ""
                  } flex font-bold items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-700 hover:text-white dark:text-white dark:hover:bg-gray-700`}
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  <svg
                    className={`w-5 
                    ${pathName === "/" || "/#" ? " text-white" : ""}
                    h-5 text-blue-700 transition duration-75 dark:text-gray-400  group-hover:text-white dark:group-hover:text-white`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="flex-1 ml-3 text-left  whitespace-nowrap">
                    Dashboard
                  </span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <ul id="dropdown-example" className="hidden  ">
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full  text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Overview
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      className="pt-2 flex items-center w-full  text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Transaction List
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <button
                  type="button"
                  className={`${
                    pathName === "/service" ? "bg-black text-white" : ""
                  } flex items-center font-bold w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:text-white hover:bg-black dark:text-white dark:hover:bg-gray-700`}
                  aria-controls="dropdown-examplee"
                  data-collapse-toggle="dropdown-examplee"
                >
                  <MdHomeRepairService />
                  <span className="flex-1 ml-3 text-left whitespace-nowrap ">
                    Services
                  </span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <ul id="dropdown-examplee" className="hidden py-2 space-y-2">
                  <li>
                    <a
                      href="/service"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Invoice
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#"
                  className="font-bold flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <HiOutlineArrowTrendingUp />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Analytics
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-bold flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <AiFillDollarCircle />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Earnings
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <hr className="border-t-2 border-gray-300 my-4" />
          <div className="mt-4">
            <ul>
              <li>
                <a
                  href="#"
                  className="font-bold flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <Avatar
                    size="xs"
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    My Profile
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-bold flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <AiFillMessage />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    My Messages
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-bold flex items-center p-2 text-gray-900 hover:text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700 group"
                >
                  <MdHomeRepairService />
                  <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-bold flex items-center p-2 text-gray-900 hover:text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700 group"
                >
                  <PiSignOutBold />
                  <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <div className="p-4 sm:ml-64 md:mr-24">
        <Nav />
        {children}
      </div>{" "}
      <Box mt={32}>
        <Footer />
      </Box>
    </Box>
  );
}

// import {
//   Avatar,
//   Box,
//   BoxProps,
//   Drawer,
//   DrawerContent,
//   Flex,
//   FlexProps,
//   HStack,
//   Heading,
//   Icon,
//   IconButton,
//   Menu,
//   MenuButton,
//   MenuDivider,
//   MenuItem,
//   MenuList,
//   Text,
//   VStack,
//   useColorModeValue,
//   useDisclosure,
// } from "@chakra-ui/react";
// import { ReactNode } from "react";
// import { IconType } from "react-icons";
// import {
//   BiMessageSquareMinus,
//   BiSolidCart,
//   BiSolidDashboard,
//   BiSolidReport,
// } from "react-icons/bi";
// import { FiBell, FiChevronDown, FiMenu, FiSettings } from "react-icons/fi";
// import { MdAnalytics } from "react-icons/md";

// interface LinkItemProps {
//   name: string;
//   icon: IconType;
//   subLinks: string[];
// }

// interface NavItemProps extends FlexProps {
//   icon: IconType;
//   children: React.ReactNode;
// }

// interface MobileProps extends FlexProps {
//   onOpen: () => void;
// }

// interface SidebarProps extends BoxProps {
//   onClose: () => void;
// }

// const LinkItems: Array<LinkItemProps> = [
//   { name: "Dashboard", icon: BiSolidDashboard, subLinks: ["todo", "todo"] },
//   { name: "Reports", icon: BiSolidReport, subLinks: ["todo", "todo"] },
//   { name: "Orders", icon: BiSolidCart, subLinks: ["todo", "todo"] },
//   { name: "Analytics", icon: MdAnalytics, subLinks: ["todo", "todo"] },
//   { name: "Messages", icon: BiMessageSquareMinus, subLinks: ["todo", "todo"] },

//   { name: "Settings", icon: FiSettings, subLinks: ["todo", "todo"] },
// ];

// const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
//   return (
//     <Box
//       transition="3s ease"
//       bg="black"
//       borderRight="1px"
//       borderRightColor={useColorModeValue("gray.200", "gray.700")}
//       w={{ base: "full", md: 60 }}
//       pos="fixed"
//       h="full"
//       {...rest}
//     >
//       <Flex h="20" alignItems="center" mx="8" color={"white"}>
//         <BsFillHouseDoorFill />
//         <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" ml={4}>
//           PROPARY
//         </Text>

//         <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
//       </Flex>
//       {LinkItems.map((link) => (
//         <NavItem key={link.name} icon={link.icon}>
//           {link.name}
//         </NavItem>
//       ))}
//     </Box>
//   );
// };

// const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
//   return (
//     <Box
//       as="a"
//       href="#"
//       style={{ textDecoration: "none" }}
//       _focus={{ boxShadow: "none" }}
//     >
//       <Flex
//         color={"gray.300"}
//         align="center"
//         p="4"
//         mx="4"
//         borderRadius="lg"
//         role="group"
//         cursor="pointer"
//         _hover={{
//           // bg: "cyan.400",
//           color: "white",
//         }}
//         {...rest}
//       >
//         {icon && (
//           <Icon
//             mr="4"
//             fontSize="16"
//             _groupHover={{
//               color: "white",
//             }}
//             as={icon}
//           />
//         )}
//         {children}
//       </Flex>
//     </Box>
//   );
// };

// const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
//   return (
//     <Flex
//       ml={{ base: 0, md: 60 }}
//       px={{ base: 4, md: 4 }}
//       height="20"
//       alignItems="center"
//       bg={useColorModeValue("white", "gray.900")}
//       borderBottomWidth="1px"
//       borderBottomColor={useColorModeValue("gray.200", "gray.700")}
//       justifyContent={{ base: "space-between", md: "space-between" }}
//       {...rest}
//     >
//       <IconButton
//         display={{ base: "flex", md: "none" }}
//         onClick={onOpen}
//         variant="outline"
//         aria-label="open menu"
//         icon={<FiMenu />}
//       />

//       <Flex flexDirection={{ md: "row", base: "column" }}>
//         <Heading>Dashboard</Heading>{" "}
//         <Text
//           mx={{ md: 4, base: "unset" }}
//           mt={{ md: 4 }}
//           display={{ md: "block", base: "none" }}
//         >
//           {" "}
//           |{" "}
//         </Text>
//         <Flex mt={{ md: 4 }}>
//           <Text>Todo</Text>
//           <Text ml={2}>Todo2</Text>
//         </Flex>
//       </Flex>

//       <HStack spacing={{ base: "0", md: "6" }}>
//         <IconButton
//           size="lg"
//           variant="ghost"
//           aria-label="open menu"
//           icon={<FiBell />}
//         />
//         <Flex alignItems={"center"}>
//           <Menu>
//             <MenuButton
//               py={2}
//               transition="all 0.3s"
//               _focus={{ boxShadow: "none" }}
//             >
//               <HStack>
//                 <Avatar
//                   size={"sm"}
//                   src={
//                     "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
//                   }
//                 />
//                 <VStack
//                   display={{ base: "none", md: "flex" }}
//                   alignItems="flex-start"
//                   spacing="1px"
//                   ml="2"
//                 >
//                   <Text fontSize="sm">Justina Clark</Text>
//                   <Text fontSize="xs" color="gray.600">
//                     Admin
//                   </Text>
//                 </VStack>
//                 <Box display={{ base: "none", md: "flex" }}>
//                   <FiChevronDown />
//                 </Box>
//               </HStack>
//             </MenuButton>
//             <MenuList
//               bg={useColorModeValue("white", "gray.900")}
//               borderColor={useColorModeValue("gray.200", "gray.700")}
//             >
//               <MenuItem>Profile</MenuItem>
//               <MenuItem>Settings</MenuItem>
//               <MenuItem>Billing</MenuItem>
//               <MenuDivider />
//               <MenuItem>Sign out</MenuItem>
//             </MenuList>
//           </Menu>
//         </Flex>
//       </HStack>
//     </Flex>
//   );
// };

// const PageLayout = ({ children }: { children: ReactNode }) => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
//       <SidebarContent
//         onClose={() => onClose}
//         display={{ base: "none", md: "block" }}
//       />
//       <Drawer
//         isOpen={isOpen}
//         placement="left"
//         onClose={onClose}
//         returnFocusOnClose={false}
//         onOverlayClick={onClose}
//         size="full"
//       >
//         <DrawerContent>
//           <SidebarContent onClose={onClose} />
//         </DrawerContent>
//       </Drawer>
//       {/* mobilenav */}

//       <MobileNav onOpen={onOpen} />

//       <Box ml={{ base: 0, md: 60 }} p="4">
//         {children}
//       </Box>
//     </Box>
//   );
// };

// export default PageLayout;
