import { Grid, SystemProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export function GridLayout({
  props,
  children,
}: {
  props: SystemProps;
  children: ReactNode;
}) {
  return (
    <Grid
      {...props}
      w={props.w ? props.w : "100%"}
      h={props.h ? props.h : "auto"}
      templateColumns={`repeat(${props.gridColumn ? props.gridColumn : 1}, ${
        props.gridRow ? props.gridRow : 1
      }fr)`}
    >
      {children}
    </Grid>
  );
}
