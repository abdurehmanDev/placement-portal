import React from 'react';
import { Box, Stack, Text, List, ListItem, Button, useColorModeValue } from '@chakra-ui/react';

interface JobCardProps {
  title: string;
  company: string;
  salary: string;
  jobType: string;
  location: string;
  onApply: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ title, company, salary, jobType, location, onApply }) => {
  return (
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
          {title}
        </Text>
        <Stack direction={"row"} align={"center"} justify={"center"}>
          <Text fontSize={"6xl"} fontWeight={800}>
            {company}
          </Text>
        </Stack>
      </Stack>

      <Box px={6} py={10}>
        <List spacing={3}>
          <ListItem>Pay {salary} a month</ListItem>
          <ListItem>Job type: {jobType}</ListItem>
          <ListItem>Location: {location}</ListItem>
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
          onClick={onApply}
        >
          Apply now
        </Button>
      </Box>
    </Box>
  );
};

export default JobCard;
