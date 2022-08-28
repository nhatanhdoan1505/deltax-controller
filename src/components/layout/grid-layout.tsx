import { Grid, SystemProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps extends SystemProps {
  children: ReactNode;
}
export function GridLayout({ children, ...props }: IProps) {
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
