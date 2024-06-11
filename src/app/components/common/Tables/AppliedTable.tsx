import {
  Box,
  BoxProps,
  Button,
  Container,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import dynamic from "next/dynamic";
import React from "react";
import Table from "../../Base/Table/Table";
import { AppliedTableProps } from "src/app/services/types";
import StatusBadgeViewer from "../statusBadgeViewer";
import { SlOptions } from "react-icons/sl";
import NoDataFound from "../ErrorMessages/NoDataFound";

export default function AppliedTable({
  Applications,
  isLoading,
  ...rest
}: AppliedTableProps & BoxProps) {

  return (
    <Box h={"40rem"} bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"full"} py={24} as={Stack} spacing={12}>
        <Stack spacing={4}>
          <Heading>Applications</Heading>
        </Stack>

        <Box {...rest}>
          <Stack spacing={{ base: 10, md: 20 }}>
            {Applications.length > 0 ?<Table
              isZebraTable={true}
              skeletonCount={{
                rows: 5,
                cols: 6,
              }}
              loadingSkeleton={isLoading}
              tableHeaders={[
                {
                  text: "FullName",
                  colSpan: 3,
                  color: "contrast.200",
                  fontWeight: "medium",
                  fontSize: "xs",
                  textAlign: "start",
                },
                {
                  text: "Status",
                  colSpan: 3,
                  color: "contrast.200",
                  fontWeight: "medium",
                  fontSize: "xs",
                  textAlign: "start",
                },
                {
                  text: "Company Name",
                  colSpan: 3,
                  color: "contrast.200",
                  fontWeight: "medium",
                  textAlign: "start",
                  fontSize: "xs",
                },
                {
                  text: "Email",
                  colSpan: 3,
                  color: "contrast.200",
                  fontWeight: "medium",
                  textAlign: "start",
                  fontSize: "xs",
                },
                {
                  text: "Role",
                  colSpan: 3,
                  color: "contrast.200",
                  fontWeight: "medium",
                  fontSize: "xs",
                  textAlign: "start",
                },
                {
                  text: "Applied Date",
                  colSpan: 3,
                  color: "contrast.200",
                  fontSize: "xs",
                  fontWeight: "medium",
                  textAlign: "start",
                },
                
                {
                  text: "",
                  colSpan: 1,
                  color: "contrast.200",
                  fontWeight: "medium",
                  fontSize: "xs",
                  textAlign: "center",
                },
              ]}
              tableHeaderGridProps={{
                templateColumns: `repeat(19, 1fr)`,
                textTransform: "capitalize",
                px: 5,
              }}
              tableData={Applications?.map((item) => ({
                data: [
                  {
                    text: `${item?.name || "NA"}`,
                    colSpan: 3,
                    color: "primary.1100",
                    fontWeight: "medium",
                    fontSize: "sm",
                    textTransform: "capitalize",
                  },
                  {
                    children: <>{StatusBadgeViewer(String(item?.status))}</>,
                    colSpan: 3,
                    color: "primary.1100",
                    fontWeight: "medium",
                    fontSize: "sm",
                    textAlign: "start",
                  },
                  {
                    text: `${String(item.companyName)}`,
                    colSpan: 3,
                    color: "primary.1100",
                    fontWeight: "medium",
                    fontSize: "sm",
                  },
                  {
                    text: `${String(item.email?.toLowerCase())}`,
                    colSpan: 3,
                    color: "primary.1100",
                    fontWeight: "medium",
                    fontSize: "sm",
                    textAlign: "start",
                  },
                  {
                    text: `${item.role}`,
                    colSpan: 3,
                    color: "primary.1100",
                    fontWeight: "medium",
                    fontSize: "sm",
                  },
                  {
                    text: `${item.date}`,
                    colSpan: 3,
                    color: "primary.1100",
                    fontWeight: "medium",
                    fontSize: "sm",
                    textAlign: "start",
                  },
                  {
                    children: (
                      <Menu>
                        <MenuButton
                          as={Button}
                          bg="transparent"
                          color="primaty.500"
                          _hover={{
                            bg: "primary.300",
                          }}
                          _active={{
                            bg: "primary.300",
                          }}
                          _focus={{
                            bg: "primary.300",
                            border: "none",
                          }}
                          p="0"
                        >
                          <SlOptions />
                        </MenuButton>
                        <MenuList fontSize="sm" color="gunmetal.700">
                          <MenuItem
                            fontWeight="bold"
                            // onClick={() => {
                            //   setViewDetail(item);
                            //   viewDetailDraweronOpen();
                            // }}
                          >
                            View Detail
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    ),
                    colSpan: 1,
                    color: "primary.1100",
                    fontWeight: "medium",
                    fontSize: "sm",
                    textAlign: "center",
                  },
                ],
                tableDataGridProps: {
                  templateColumns: `repeat(19, 1fr)`,
                  mt: 1,
                  px: 5,
                  py: 2,
                  alignItems: "center",
                },
              }))}
            />
            : (
              <Flex justifyContent="center" alignItems="center">
       
          </Flex>
            )}
          </Stack>
          {/* <SideDrawer
        onClose={viewDetailDraweronClose}
        isOpen={viewDetailDrawerisOpen}
        size="lg"
        drawerContentProps={{
          background: "contrast.200",
        }}
        drawerCloseButtonProps={{
          color: "primary.1100",
        }}
        drawerBody={{
          children: <ViewDetailsPanel details={viewDetail} />,
        }}
        drawerHeader={{
          children: (
            <Box color="primary.1100" fontSize="md" fontWeight="bold">
              View detail
            </Box>
          ),
        }}
      /> */}
        </Box>
      </Container>
    </Box>
  );
}
