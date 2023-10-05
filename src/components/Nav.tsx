"use client";

import { AddIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { BsBell } from "react-icons/bs";
import { TbMessageCircle2 } from "react-icons/tb";
interface Props {
  children: React.ReactNode;
}

const Links = ["HomePage", "Explore", "About Evvent"];

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("pink.200", "gray.700"),
        color: "white",
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Nav({ title }: { title: string }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
        <Flex
          h={16}
          px={4}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          {/* <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          /> */}
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              fontWeight={"medium"}
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <HStack spacing={6} alignItems={"center"}>
            <button className="border border-grey-500 hidden md:block hover:text-white hover:bg-pink-400 text-black text-xs font-semibold py-2 px-4 rounded-lg inline-flex items-center h-8">
              <AddIcon marginRight={2} mb={1} />
              <span className="mb-2">Add Services</span>
            </button>
            <TbMessageCircle2 size={24} mr={16} />{" "}
            <Box>
              <BsBell size={24} />
            </Box>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"xs"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList display={{ base: "block", md: "none" }}>
                <MenuItem>Homepage</MenuItem>
                <MenuItem>Explore</MenuItem>
                <MenuDivider />
                <MenuItem>About Evvent</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Flex>
        <Box mt={8}>
          <Heading>{title}</Heading>
        </Box>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
