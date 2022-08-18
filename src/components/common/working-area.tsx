import { Grid, GridItem } from "@chakra-ui/react";
import { PluginWorkingArea, DeviceWorkingArea } from "..";

export function WorkingArea() {
  return (
    <Grid w="100%" h="100vh" templateColumns="repeat(2, 1fr)" gap={0}>
      <GridItem w="100%" h="100vh">
        <PluginWorkingArea />
      </GridItem>
      <GridItem w="100%" h="100vh">
        <DeviceWorkingArea />
      </GridItem>
    </Grid>
  );
}
