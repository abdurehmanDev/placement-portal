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
import JobCard from "src/app/components/common/JobCard";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { push } = useRouter();

  const handleApply: (company: string) => () => void =
    (company: string) => () => {
      push(`Apply-${company}`);
    };

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
        <Flex
          flexDirection={{
            base: "column",
            md: "column",
            lg: "row",
          }}
          justifyContent={"center"}
          alignItems="center"
          gap={10}
        >
          <Center p={6}>
            <JobCard
              title="Web Developer"
              company="TCS"
              salary="₹79,672"
              jobType="Full-time"
              location="Delhi, New Delhi"
              onApply={handleApply("Tcs")}
            />
          </Center>
          <Center p={6}>
            <JobCard
              title="Data Scientist"
              company="HP"
              salary="₹89,602"
              jobType="Full-time"
              location="Hyderabad, Telangana"
              onApply={handleApply("Hp")}
            />
          </Center>
          <Center p={6}>
            <JobCard
              title="BE Developer"
              company="Dell"
              salary="₹99,892"
              jobType="Full-time"
              location="Bengaluru, Karnataka"
              onApply={handleApply("Dell")}
            />
          </Center>

          <Center p={6}>
            <JobCard
              title="AI/ML"
              company="HCL"
              salary="₹60, 898"
              jobType="Intership"
              location="Gurugram, Haryana"
              onApply={handleApply("Hcl")}
            />
          </Center>
        </Flex>
      </Flex>
      <Stats />
      <Footer />
    </>
  );
};

export default withAuth(Dashboard);
