import { Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import CustomBadge from "../Base/Badge/CustomBadge";

export default function StatusBadgeViewer(status: string) {
  switch (status) {
    case "Applied":
      return <CustomBadge color="green.500" bg="green.100" tag={"Applied"} />;
    case "offered":
      return <CustomBadge color="orange.500" bg="orange.100" tag={"offered"} />;
    case "selected":
      return <CustomBadge color="pink.200" bg="pink.100" tag={"selected"} />;
    case "interviewed":
      return <CustomBadge color="blue.100" bg="blue.50" tag={"interviewed"} />;
    case "shortlisted":
      return (
        <CustomBadge color="orange.700" bg="orange.100" tag={"shortlisted"} />
      );

    default:
      return (
        <Text display="inline" color="primary.1100">
          --
        </Text>
      );
      break;
  }
}
