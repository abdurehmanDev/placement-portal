"use client";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import HeaderUnproc from "src/app/components/Base/HeaderUnproc";
import InputControl from "src/app/components/Base/InputControl";
import { useRouter } from "next/navigation";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()


  return (
    <Box minH={"100vh"}>
      <HeaderUnproc />
      <Flex
        align={"center"}
        justify={"center"}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <InputControl
                    formId={"firstName"}
                    label={"First Name"}
                    type={"text"}
                  />
                </Box>
                <Box>
                  <InputControl
                    formId={"lastName"}
                    label={"Last Name"}
                    type={"text"}
                  />
                </Box>
              </HStack>
              <InputControl
                formId={"phone"}
                label={"Mobile Number"}
                type={"number"}
              />
              <InputControl
                formId={"email"}
                label={"Email address"}
                type={"email"}
              />

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? "text" : "password"} />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <Link color={"blue.400"} onClick={() => router.push(`/login`)}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
