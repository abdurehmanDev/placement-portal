import {
  Flex,
  FlexProps,
  Heading,
  Image,
  ImageProps,
  Text,
} from "@chakra-ui/react";
import React from "react";
type NotFoundMessage = {
  title?: string;
  description?: string;
  image?: string;
  imageProps?: ImageProps;
};

export default function NoDataFound({
  title,
  description,
  image,
  imageProps,
  ...rest
}: FlexProps & NotFoundMessage) {
  return (
    <Flex
      align="center"
      flexDir="column"
      justify="center"
      h="full"
      w="full"
      {...rest}
    >
      {image && <Image src={image} alt="No Data Found" {...imageProps} />}
      <Heading
        fontSize="lg"
        mt="5"
        textAlign="center"
        fontWeight="semibold"
        color="primary.1100"
      >
        {title}
      </Heading>
      <Text
        fontSize="sm"
        mt="2"
        textAlign="center"
        fontWeight="normal"
        color="primary.1100"
      >
        {description}
      </Text>
    </Flex>
  );
}
