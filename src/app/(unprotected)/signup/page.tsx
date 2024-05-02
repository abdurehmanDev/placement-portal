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
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import HeaderUnproc from "src/app/components/Base/HeaderUnproc";
import InputControl from "src/app/components/Base/InputControl";
import { useRouter } from "next/navigation";
import { firebaseApp } from "src/app/services/firebase/config";

export default function SignUp() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleSignUp = async () => {
    try {
      await firebaseApp.auth().createUserWithEmailAndPassword(email, password);
      // If signup is successful, clear any previous errors
      setEmail('');
      setPassword('');
      router.push('/login');
      toast({
        title: 'Signup Successful',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Signup Error',
        status: 'error',
        duration: 3000,
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
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
          </Stack>
          <Box rounded={"lg"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
            <form onSubmit={handleSignUp}>

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
              {/* <InputControl
                formId={"phone"}
                label={"Mobile Number"}
                type={"number"}
              /> */}
              <InputControl
                formId={"email"}
                label={"Email address"}
                type={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
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
                  onClick={handleSignUp}
                >
                  Sign up
                </Button>
               
              </Stack>
               </form>

              <Stack pt={6}>
           
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link
                    color={"blue.400"}
                    onClick={() => router.push(`/login`)}
                  >
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
