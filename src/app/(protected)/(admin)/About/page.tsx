"use client";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import React, { ReactElement } from "react";
import NavBar from "src/app/components/Base/NavBar";
import Footer from "src/app/components/Base/Footer";
import withAuth from "src/app/middleware/withAuth";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

function About() {
  return (
    <>
      <NavBar />
      <Container maxW={"6xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              About Us
            </Text>
            <Heading> Our Mission</Heading>
            <Text color={"gray.500"} fontSize={"md"} lineHeight="1.5">
              At Let's Placed, our mission is to simplify and streamline the
              placement process for both students and recruiters. We believe
              that connecting talented individuals with the right opportunities
              is key to fostering growth and success in the professional world.
            </Text>
          </Stack>
      
      
          <Stack spacing={4} pt={8}>
            <Heading> Our Vision</Heading>
            <Text color={"gray.500"} fontSize={"md"} lineHeight="1.5">
              We envision a future where every student has access to valuable
              career opportunities and every organization can easily find top
              talent. By leveraging technology and innovation, we aim to
              revolutionize the way placements are managed, making the process
              efficient, transparent, and inclusive.
            </Text>
          </Stack>
          

          <Stack spacing={4} pt={8}>
            <Heading>Our Values</Heading>
            <Text color={"gray.500"} fontSize={"md"} lineHeight="1.5">
            We are committed to delivering high-quality services and solutions that exceed expectations.
            We operate with honesty, transparency, and ethical standards in all aspects of our work.
            We embrace creativity and strive to continuously improve and adapt to meet the evolving needs of our users.
              </Text>
          </Stack>
          </Box>
              <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
      <Footer />
    </>
  );
}



export default withAuth(About);