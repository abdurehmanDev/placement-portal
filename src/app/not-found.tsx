"use client";
import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";
import React from "react";

export default function NotFound() {
//   const { status } = useSession();
  const { push } = useRouter();

  return (
    <Flex
      as="main"
      alignItems="center"
      height="full"
      width="full"
      justifyContent="center"
      flexDirection="column"
    >
      <Image src={"images/not-found.png"} alt="No page found" h={340} w={400} />
      <Heading
        color="black.1100"
        fontWeight="semibold"
        lineHeight="1.5"
        fontSize="5xl"
        pt={10}
        pb={2}
      >
        Page Not Found
      </Heading>
      <Text color="black.500" fontWeight="semibold" pb={9}>
        Oops! The page you are looking for does not exist
      </Text>
      <Button
        variant="solid"
        onClick={() => {
          push(`/`);
        }}
        colorScheme="primary"
        fontWeight="medium"
        fontSize="sm"
        borderRadius={4}
        px={8}
        py={3}
      >
        Dashboard
        {/* {status === "authenticated" ? "Go to Dashboard" : "Go to Login"} */}
      </Button>
    </Flex>
  );
}
