import { CardProps, Grid, GridItem, Skeleton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

interface TableSkeletonProps extends CardProps {
  isLoading: boolean;
  children?: React.ReactNode;
  rowsandCols: { cols: number; rows: number };
}

export default function TableSkeleton({
  isLoading,
  children,
  rowsandCols,
  ...rest
}: TableSkeletonProps) {
  if (isLoading) {
    return (
      <motion.div
        style={{ height: "100%", width: "100%" }}
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {Array.from(Array(rowsandCols.rows), (_e, i) => {
          return (
            <Skeleton key={`row-${i}-1`} endColor="primary.100" mx={1.5}>
              <Grid
                py={3}
                mt="2"
                gap={4}
                gridTemplateColumns={`repeat(${rowsandCols.cols}, 1fr)`}
                {...rest}
              >
                {Array.from(Array(rowsandCols.cols), (_e, i) => {
                  return (
                    <GridItem key={`row-${i}-2`} px={4}>
                      <Skeleton
                        h={3}
                        maxW="full"
                        mb={2}
                        endColor="primary.400"
                        visibility="visible"
                      />
                    </GridItem>
                  );
                })}
              </Grid>
            </Skeleton>
          );
        })}
      </motion.div>
    );
  } else {
    return (
      <motion.div
        style={{ height: "auto" }}
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {children}
      </motion.div>
    );
  }
}
