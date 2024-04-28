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
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import HeaderUnproc from "src/app/components/Base/HeaderUnproc";
import InputControl from "src/app/components/Base/InputControl";

export default function Login() {
  const router = useRouter();

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
              <Select
                placeholder="Please select your role"
                border="1px solid #c9c8c8"
              >
                <option value="admin">Admin</option>
                <option value="placementCell">Placement cell</option>
                <option value="student">Student</option>
              </Select>
              <InputControl
                formId={"email"}
                label={"Email address"}
                type={"email"}
              />
              <InputControl
                formId={"password"}
                label={"Password"}
                type={"password"}
              />
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                New user?{" "}
                <Link color={"blue.400"} onClick={() => router.push(`/signup`)}>
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
