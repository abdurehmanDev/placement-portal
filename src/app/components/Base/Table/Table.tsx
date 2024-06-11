import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { TableProps } from "src/app/services/types";
import TableSkeleton from "../TableSkeleton";
import NoDataFound from "../../common/ErrorMessages/NoDataFound";


export default function Table({
  tableHeaders,
  tableHeaderGridProps,
  tableData,
  isZebraTable,
  boxprops,
  skeletonCount,
  loadingSkeleton,
}: TableProps) {
  return (
    <Box>
      {tableHeaders?.length ? (
        <Grid
          position="sticky"
          top="0"
          rounded="base"
          px={2}
          py={3}
          bg="primary.1100"
          {...tableHeaderGridProps}
        >
          {tableHeaders?.map(({ text, children, ...rest }, i) => (
            <GridItem
              key={`header-${i}`}
              color="primary.500"
              fontSize="xs"
              {...rest}
            >
              {text || children}
            </GridItem>
          ))}
        </Grid>
      ) : null}
      <Box
        {...boxprops}
        css={{
          "&::-webkit-scrollbar": {
            width: 4,
          },
        }}
      >
        {loadingSkeleton ? (
          <TableSkeleton
            isLoading={loadingSkeleton}
            rowsandCols={{
              cols: skeletonCount.cols,
              rows: skeletonCount.rows,
            }}
          ></TableSkeleton>
        ) : tableData && tableData?.length !== 0 ? (
          <>
            {tableData?.map(({ data, tableDataGridProps }, i) => (
              <Grid
                key={`row--${i}-${tableDataGridProps.key}`}
                bg="contrast.300"
                px={2}
                py={3}
                border="1px solid"
                borderColor="contrast.400"
                {...(isZebraTable && {
                  _odd: {
                    bg: "contrast.200",
                  },
                })}
                {...tableDataGridProps}
              >
                {data?.map(({ text, children, ...rest }, i) => (
                  <GridItem
                    key={`table-body-row-${i}-${rest.key}`}
                    color="gray.400"
                    fontSize="xs"
                    {...rest}
                  >
                    {text || children}
                  </GridItem>
                ))}
              </Grid>
            ))}
          </>
        ) : (
          <Flex justifyContent="center" alignItems="center">
           
          </Flex>
        )}
      </Box>
    </Box>
  );
}
