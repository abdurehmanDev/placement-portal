"use client";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Button,
  Link,
  Checkbox,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import HeaderUnproc from "src/app/components/Base/HeaderUnproc";
import InputControl from "src/app/components/Base/InputControl";
import { auth, firebaseApp } from "src/app/services/firebase/config";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { push } = useRouter();
  const toast = useToast();

  const handleLogin = async () => {
    try {
     const res = await firebaseApp.auth().signInWithEmailAndPassword(email, password);
     console.log(res?.user?.email);
     setEmail("");
      setPassword("");
      push("/");
      toast({
        title: "Login Successful",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Login Error",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };

  return (
    <Box minH={"100vh"}>
      <HeaderUnproc />
      <Flex align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          </Stack>
          <Box rounded={"lg"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <form>
                <InputControl
                  formId={"email"}
                  label={"Email address"}
                  type={"email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputControl
                  formId={"password"}
                  label={"Password"}
                  type={"password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                  </Stack>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    type="button"
                    onClick={handleLogin}
                  >
                    Sign in
                  </Button>
                </Stack>
              </form>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                New user ?{" "}
                <Link color={"blue.400"} onClick={() => push(`/signup`)}>
                  Sing Up
                </Link>
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
