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
import React, { ReactElement, useEffect, useState } from "react";
import NavBar from "src/app/components/Base/NavBar";
import Footer from "src/app/components/Base/Footer";
import withAuth from "src/app/middleware/withAuth";
import AppliedTable from "src/app/components/common/Tables/AppliedTable";
import { ApplicationsType } from "src/app/services/types";
import WithLargeQuote from "src/app/components/common/Tables/AppliedTable";
import WithSpeechBubbles from "src/app/components/common/Tables/AppliedTable";
import NoDataFound from "src/app/components/common/ErrorMessages/NoDataFound";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

function Applications() {
  const [formData, setFormData] = useState<any[]>([]);
  const [displayNotFound, setDisplayNotFound] = useState(false);
  useEffect(() => {
    const storedData = localStorage.getItem("Apply");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setDisplayNotFound(true);
      setFormData(parsedData);
    }
  }, []);

  const [ApplicationsLoading, setApplicationsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setApplicationsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <NavBar />
      <Box display={displayNotFound ? "block" : "none"}>
        <AppliedTable
          mt={3}
          Applications={formData.slice(0, 5)}
          isLoading={ApplicationsLoading}
          position={"relative"}
        />
      </Box>

      <Flex
        display={displayNotFound ? "none" : "flex"}
        justifyContent="center"
        alignItems="center"
        h={"40rem"}
        py={24}
      >
        <NoDataFound
          title={"Sorry! No Application found"}
          image={"/images/No-Data-found.jpeg"}
          py="8"
          imageProps={{ h: 150, w: 200 }}
        />
      </Flex>

      <Footer />
    </>
  );
}

export default withAuth(Applications);
