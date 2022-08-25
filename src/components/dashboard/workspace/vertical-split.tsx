import { GridItem } from "@chakra-ui/react";
import { GridLayout } from "components";

export function VerticalSplit({
  pluginScreen,
  deviceScreen,
}: {
  pluginScreen: React.ReactNode;
  deviceScreen: React.ReactNode;
}) {
  return (
    <GridLayout props={{ h: "100vh", gridColumn: 2, gap: 0 }}>
      <GridItem w="100%" h="100%">
        {pluginScreen}
      </GridItem>
      <GridItem w="100%" h="100%">
        {deviceScreen}
      </GridItem>
    </GridLayout>
  );
}
