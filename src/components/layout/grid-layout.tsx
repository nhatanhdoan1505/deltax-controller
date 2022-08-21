import { Grid } from "@chakra-ui/react";
import { ReactNode } from "react";

export function GridLayout({
  columns = 1,
  children,
  rows = 1,
  gap = 1,
  w = "100%",
  h = "auto",
}: {
  gap?: number;
  rows?: number;
  columns?: number;
  w?: string;
  h?: string;
  children: ReactNode;
}) {
  return (
    <Grid
      w={w}
      h={h}
      templateColumns={`repeat(${columns}, ${rows}fr)`}
      gap={gap}
    >
      {children}
    </Grid>
  );
}
