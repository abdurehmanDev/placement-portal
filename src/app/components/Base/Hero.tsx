// import Head from "next/head";
// import {
//   Box,
//   Heading,
//   Container,
//   Text,
//   Button,
//   Stack,
//   Icon,
//   useColorModeValue,
//   createIcon,
// } from "@chakra-ui/react";

// export default function Hero() {
//   return (
//     <>
//       <Head>
//         <link
//           href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
//           rel="stylesheet"
//         />
//       </Head>

//       <Container maxW={"3xl"}>
//         <Stack
//           as={Box}
//           textAlign={"center"}
//           spacing={{ base: 8, md: 14 }}
//           py={{ base: 20, md: 36 }}
//         >
//           <Heading
//             fontWeight={600}
//             fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
//             // lineHeight={"40%"}
//           >
//             Welcome to {" "}
//             <Text as={"span"} color={"green.400"}>
//                IIMT Placement Cell
//             </Text>
            
//           </Heading>
//           <Text color={"gray.500"}>For Your Entire Placement Journey.</Text>

//           <Stack
//             direction={"column"}
//             // spacing={3}
//             align={"center"}
//             alignSelf={"center"}
//             position={"relative"}
//           >
//             <Button
//               colorScheme={"green"}
//               bg={"green.400"}
//             //   rounded={"full"}
//               px={6}
//               _hover={{
//                 bg: "green.500",
//               }}
//             >
//               Get Started
//             </Button>
//           </Stack>
//         </Stack>
//       </Container>
//     </>
//   );
// }




import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Heading,
  Image,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  return (
    <Flex height="92vh" background="white">

      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}>
        <Stack maxW={'2xl'} align={'center'} spacing={6}>
        <Image
          src="images/bg-banner.gif"
          alt="college logo"
          h={"400px"}
          w={"400px"}
        />
        <Heading
            fontWeight={600}
            fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
                      >
            Welcome to {" "}
            <Text as={"span"} color={"green.400"}>
               Let's Placed Portal
            </Text>
            
          </Heading>
          <Text color={"gray.500"}>For Your Entire Placement Journey.</Text>

          <Stack
            direction={"column"}
            // spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"green"}
              bg={"green.400"}

              px={6}
              _hover={{
                bg: "green.500",
              }}
              _focus={{
                bg: "green.500",
              }}
              _active={{
                bg: "green.500",
              }}
              onClick={()=> router.push("/login")}
            >
              Login
            </Button>
            </Stack>
    
        </Stack>
      </VStack>
    </Flex>
  );
}