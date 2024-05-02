"use client";
import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

import React from "react";
import Footer from "src/app/components/Base/Footer";
import Hero from "src/app/components/Base/Hero";
import NavBar from "src/app/components/Base/NavBar";
import Stats from "src/app/components/Base/Stats";
import withAuth from "src/app/middleware/withAuth";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <Hero />

      <Flex
        flexDirection="column"
        justifyContent={"center"}
        alignItems="center"
        gap={10}
      >
        <Heading>Active Drives</Heading>
        <Flex justifyContent={"center"} alignItems="center" gap={10}>
          <Center p={6}>
            <Box
              maxW={"430px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Stack
                textAlign={"center"}
                p={6}
                color={useColorModeValue("gray.800", "white")}
                align={"center"}
              >
                <Text
                  fontSize={"sm"}
                  fontWeight={500}
                  bg={useColorModeValue("green.50", "green.900")}
                  p={2}
                  px={3}
                  color={"green.500"}
                  rounded={"full"}
                >
                  Web developer
                </Text>
                <Stack direction={"row"} align={"center"} justify={"center"}>
                  <Text fontSize={"6xl"} fontWeight={800}>
                    TCS
                  </Text>
                </Stack>
              </Stack>

              <Box px={6} py={10}>
                <List spacing={3}>
                  <ListItem>Pay ₹79,672 a month</ListItem>
                  <ListItem>Job type Full-time</ListItem>
                  <ListItem>Location Delhi, Delhi</ListItem>
                </List>

                <Button
                  mt={10}
                  w={"full"}
                  bg={"green.400"}
                  color={"white"}
                  rounded={"xl"}
                  boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                  _hover={{
                    bg: "green.500",
                  }}
                  _focus={{
                    bg: "green.500",
                  }}
                >
                  Apply now
                </Button>
              </Box>
            </Box>
          </Center>
          <Center p={6}>
            <Box
              maxW={"330px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Stack
                textAlign={"center"}
                p={6}
                color={useColorModeValue("gray.800", "white")}
                align={"center"}
              >
                <Text
                  fontSize={"sm"}
                  fontWeight={500}
                  bg={useColorModeValue("green.50", "green.900")}
                  p={2}
                  px={3}
                  color={"green.500"}
                  rounded={"full"}
                >
                  Data Scientist
                </Text>
                <Stack direction={"row"} align={"center"} justify={"center"}>
                  <Text fontSize={"6xl"} fontWeight={800}>
                    HP
                  </Text>
                </Stack>
              </Stack>

              <Box px={6} py={10}>
                <List spacing={3}>
                  <ListItem>Pay ₹89,602 a month</ListItem>
                  <ListItem>Job type Full-time</ListItem>
                  <ListItem>Location Delhi, Delhi</ListItem>
                </List>

                <Button
                  mt={10}
                  w={"full"}
                  bg={"green.400"}
                  color={"white"}
                  rounded={"xl"}
                  boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                  _hover={{
                    bg: "green.500",
                  }}
                  _focus={{
                    bg: "green.500",
                  }}
                >
                  Apply now
                </Button>
              </Box>
            </Box>
          </Center>
          <Center p={6}>
            <Box
              maxW={"330px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Stack
                textAlign={"center"}
                p={6}
                color={useColorModeValue("gray.800", "white")}
                align={"center"}
              >
                <Text
                  fontSize={"sm"}
                  fontWeight={500}
                  bg={useColorModeValue("green.50", "green.900")}
                  p={2}
                  px={3}
                  color={"green.500"}
                  rounded={"full"}
                >
                  BE Developer
                </Text>
                <Stack direction={"row"} align={"center"} justify={"center"}>
                  <Text fontSize={"6xl"} fontWeight={800}>
                    Dell
                  </Text>
                </Stack>
              </Stack>

              <Box px={6} py={10}>
                <List spacing={3}>
                  <ListItem>Pay ₹99,892 a month</ListItem>
                  <ListItem>Job type Full-time</ListItem>
                  <ListItem>Location Delhi, Delhi</ListItem>
                </List>

                <Button
                  mt={10}
                  w={"full"}
                  bg={"green.400"}
                  color={"white"}
                  rounded={"xl"}
                  boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                  _hover={{
                    bg: "green.500",
                  }}
                  _focus={{
                    bg: "green.500",
                  }}
                >
                  Apply now
                </Button>
              </Box>
            </Box>
          </Center>

          <Center p={6}>
            <Box
              maxW={"330px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Stack
                textAlign={"center"}
                p={6}
                color={useColorModeValue("gray.800", "white")}
                align={"center"}
              >
                <Text
                  fontSize={"sm"}
                  fontWeight={500}
                  bg={useColorModeValue("green.50", "green.900")}
                  p={2}
                  px={3}
                  color={"green.500"}
                  rounded={"full"}
                >
                  AI/ML
                </Text>
                <Stack direction={"row"} align={"center"} justify={"center"}>
                  <Text fontSize={"6xl"} fontWeight={800}>
                    HCL
                  </Text>
                </Stack>
              </Stack>

              <Box px={6} py={10}>
                <List spacing={3}>
                  <ListItem>Pay ₹60, 898 a month</ListItem>
                  <ListItem>Job type Full-time</ListItem>
                  <ListItem>Location Delhi, Delhi</ListItem>
                </List>
                <Button
                  mt={10}
                  w={"full"}
                  bg={"green.400"}
                  color={"white"}
                  rounded={"xl"}
                  boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                  _hover={{
                    bg: "green.500",
                  }}
                  _focus={{
                    bg: "green.500",
                  }}
                >
                  Apply now
                </Button>
              </Box>
            </Box>
          </Center>
        </Flex>
      </Flex>

      <Stats />
      <Footer />
    </>
  );
};

export default withAuth(Dashboard);
