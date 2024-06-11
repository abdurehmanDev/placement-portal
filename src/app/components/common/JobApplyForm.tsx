import dynamic from "next/dynamic";
import React, { ChangeEvent, useRef, useState } from "react";
import InputControl from "../Base/InputController/InputControl";
import { Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import FooterButtons from "../Base/FooterButtons";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
  Select,
  HStack,
  Image,
} from "@chakra-ui/react";
import TextAreaControl from "../Base/InputController/TextAreaControl";
import { FaUpload } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { JobApplyFormProps } from "src/app/services/types";

export default function JobApplyForm({ formType, title }: JobApplyFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedRole, setSelectedRole] = useState("select");
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const avatars = [
    {
      name: "Ryan Florence",

      url: "https://bit.ly/ryan-florence",
    },
    {
      name: "Segun Adebayo",
      url: "https://bit.ly/sage-adebayo",
    },
    {
      name: "Kent Dodds",
      url: "https://bit.ly/kent-c-dodds",
    },
    {
      name: "Prosper Otemuyiwa",
      url: "https://bit.ly/prosper-baba",
    },
    {
      name: "Christian Nwamba",
      url: "https://bit.ly/code-beast",
    },
  ];

  const { push } = useRouter();

  const handleFileInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: any
  ) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFileName(e.target.files[0].name);
      setFieldValue("cv", e.target.files[0]);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  function addDaySuffix(day: number) {
    if (day === 1 || day === 21 || day === 31) {
      return day + "st";
    } else if (day === 2 || day === 22) {
      return day + "nd";
    } else if (day === 3 || day === 23) {
      return day + "rd";
    } else {
      return day + "th";
    }
  }

  const handleSubmitApplication = (values: any, { resetForm }: any) => {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString("default", { month: "long" });
    const year = today.getFullYear();

    // Add the suffix to the day
    const dayWithSuffix = addDaySuffix(day);

    // Concatenate the formatted date
    const formattedDate = `${dayWithSuffix} ${month}, ${year}`;

    const formValues = {
      ...values,
      cv: selectedFileName,
      date: formattedDate,
      companyName: formType,
      status: "Applied"
    };

    let existingFormData: string[] = []; // Default to an empty array

    // Retrieve existing form values array from local storage
    const storedFormData = localStorage.getItem("Apply");
    if (storedFormData) {
      existingFormData = JSON.parse(storedFormData);
    }

    // Create a new array with the appended form values
    const updatedFormData = [...existingFormData, formValues];

    // Store the updated array back into local storage
    localStorage.setItem("Apply", JSON.stringify(updatedFormData));

    resetForm();
    setSubmitted(true);
    setSelectedFileName(null);
    setSelectedRole("");
  };

  return (
    <>
      <Box position={"relative"} display={submitted ? "none" : "block"}>
        <Container
          as={SimpleGrid}
          maxW={"7xl"}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}
        >
          <Stack spacing={{ base: 10, md: 20 }}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            >
              {title}
            </Heading>
            <Stack direction={"row"} spacing={4} align={"center"}>
              <AvatarGroup>
                {avatars.map((avatar) => (
                  <Avatar
                    key={avatar.name}
                    name={avatar.name}
                    src={avatar.url}
                    size={useBreakpointValue({ base: "md", md: "lg" })}
                    position={"relative"}
                    zIndex={2}
                    _before={{
                      content: '""',
                      width: "full",
                      height: "full",
                      rounded: "full",
                      transform: "scale(1.125)",
                      position: "absolute",
                      zIndex: -1,
                      top: 0,
                      left: 0,
                    }}
                  />
                ))}
              </AvatarGroup>
              <Text
                fontFamily={"heading"}
                fontSize={{ base: "4xl", md: "6xl" }}
              >
                +
              </Text>
              <Flex
                align={"center"}
                justify={"center"}
                fontFamily={"heading"}
                fontSize={{ base: "sm", md: "lg" }}
                bg={"gray.800"}
                color={"white"}
                rounded={"full"}
                minWidth={useBreakpointValue({ base: "44px", md: "60px" })}
                minHeight={useBreakpointValue({ base: "44px", md: "60px" })}
                position={"relative"}
                _before={{
                  content: '""',
                  width: "full",
                  height: "full",
                  rounded: "full",
                  transform: "scale(1.125)",
                  position: "absolute",
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}
              >
                YOU
              </Flex>
            </Stack>
          </Stack>
          <Stack
            border={"1px solid"}
            rounded={"xl"}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: "lg" }}
          >
            <Stack spacing={4}>
              <Heading
                color={"gray.800"}
                lineHeight={1.1}
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                textTransform="uppercase"
              >
                {formType}
              </Heading>
              <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                We’re looking for amazing engineers just like you! Become a part
                of our rockstar engineering team and skyrocket your career!
              </Text>
            </Stack>

            <Formik
              initialValues={{
                name: "",
                mobile_number: "",
                email: "",
                address: "",
                cv: null as File | null,
                role: "",
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string()
                  .matches(
                    /^[a-zA-Z]+(\s*[a-zA-Z]+)*(\s*[a-zA-Z]+)*$/,
                    "Invalid name"
                  )
                  .required("Required"),
                mobile_number: Yup.string()
                  .matches(/^[6-9][0-9]{9}$/, "Invalid mobile number")
                  .required("Required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .matches(
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    "Invalid email address"
                  )
                  .required("Required"),
                address: Yup.string().required("Required"),
                cv: Yup.mixed().required("Required"),
                role: Yup.string().required("Required"),
              })}
              onSubmit={handleSubmitApplication}
            >
              {({ setFieldValue }) => (
                <Box w="full">
                  <Form>
                    <Box>
                      <InputControl
                        mt="4"
                        label="Full Name"
                        name="name"
                        inputProps={{
                          type: "text",
                          placeholder: "John Doe",
                        }}
                        labelProps={{
                          fontWeight: "medium",
                          fontSize: "sm",
                        }}
                      />

                      <InputControl
                        mt="4"
                        label="Mobile No"
                        name="mobile_number"
                        inputLeftElement="+91"
                        inputProps={{
                          type: "text",
                          placeholder: "987XXXXXXX",
                        }}
                      />
                      <InputControl
                        mt="4"
                        label="Email"
                        name="email"
                        inputProps={{
                          type: "email",
                          placeholder: "example@gmail.com",
                        }}
                      />

                      <TextAreaControl
                        mt="4"
                        label="Address"
                        name="address"
                        inputProps={{
                          placeholder: "Enter Address",
                          resize: "none",
                          color: "black.600",
                        }}
                      />

                      <HStack justifyContent="space-between">
                        <Flex flexDirection="column" mt="4">
                          <Box
                            as="span"
                            fontSize="xs"
                            fontWeight="400"
                            color="gray.800"
                            width="fit-content"
                            background="contrast.200"
                            mb="8px"
                          >
                            Upload your CV
                          </Box>
                          <Input
                            type="file"
                            accept=".pdf"
                            border="none"
                            background="none"
                            style={{ display: "none" }}
                            ref={fileInputRef}
                            bgColor="none"
                            w="fit-content"
                            onChange={(e) =>
                              handleFileInputChange(e, setFieldValue)
                            }
                          />
                          <Button
                            w={157}
                            h={10}
                            justifyContent="space-evenly"
                            onClick={handleButtonClick}
                          >
                            <FaUpload />
                            <Text fontSize="sm" fontWeight="normal">
                              Choose File
                            </Text>
                          </Button>
                          {selectedFileName && (
                            <Text lineHeight="1.5" color="primary.1100" mt={2}>
                              Selected File: {selectedFileName}
                            </Text>
                          )}
                        </Flex>

                        <Flex flexDirection="column" mt="4">
                          <Box
                            as="span"
                            fontSize="xs"
                            fontWeight="400"
                            color="gray.800"
                            width="fit-content"
                            background="contrast.200"
                            mb="8px"
                          >
                            Job Role
                          </Box>
                          <Field
                            as={Select}
                            name="role"
                            bg="#d9d9d9"
                            borderColor="#d9d9d9"
                            w="100%"
                          >
                            <option value="">Select</option>
                            <option value="Developer">Developer</option>
                            <option value="Tester">Tester</option>
                            <option value="QA">QA</option>
                          </Field>
                        </Flex>
                      </HStack>
                    </Box>
                    <Flex pt={8} justifyContent="flex-end" alignItems="center">
                      <Button
                        color="primary.500"
                        bg="contrast.300"
                        px="0"
                        fontSize="sm"
                        fontWeight="medium"
                        minWidth="120"
                        borderRadius="base"
                        borderWidth="1px"
                        borderColor="blue.200"
                        type="button"
                        _active={{
                          background: "white",
                        }}
                        _hover={{
                          background: "white",
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        color="primary.500"
                        bg="contrast.300"
                        ml={4}
                        px="0"
                        fontSize="sm"
                        fontWeight="medium"
                        minWidth="120"
                        borderRadius="base"
                        borderWidth="1px"
                        borderColor="blue.200"
                        type="submit"
                        _active={{
                          background: "white",
                        }}
                        _hover={{
                          background: "white",
                        }}
                      >
                        Submit
                      </Button>
                    </Flex>
                  </Form>
                </Box>
              )}
            </Formik>
          </Stack>
        </Container>
      </Box>

      <Flex
        as="main"
        alignItems="center"
        height="full"
        width="full"
        justifyContent="center"
        flexDirection="column"
        display={submitted ? "flex" : "none"}
      >
        <Image
          src={"images/success-icon.gif"}
          alt="Submitted"
          h={340}
          w={400}
        />
        <Heading
          color="black.1100"
          fontWeight="semibold"
          lineHeight="1.5"
          fontSize="5xl"
          pt={10}
          pb={2}
        >
          Successfully Submitted
        </Heading>

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
          Go To Dashboard
        </Button>
      </Flex>
    </>
  );
}
