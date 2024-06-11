import { Badge, BadgeProps } from "@chakra-ui/react";
import React from "react";
type CustomBagdeProps = { tag: string };
export default function CustomBadge({
  tag,
  ...rest
}: BadgeProps & CustomBagdeProps) {
  return (
    <Badge
      fontSize="10px"
      fontWeight="bold"
      px={2}
      py={1}
      rounded="full"
      textTransform="uppercase"
      {...rest}
    >
      {tag}
    </Badge>
  );
}
