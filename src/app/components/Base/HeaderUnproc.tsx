import { Flex, Image } from "@chakra-ui/react";



export default function HeaderUnproc() {
    return ( 
        <Flex p={4} alignItems="center" justifyContent="space-between">
        <Image
          src="images/iimt-logo.png"
          alt="college logo"
          h={"56px"}
          w={"180px"}
        />
      </Flex>
     );
}

