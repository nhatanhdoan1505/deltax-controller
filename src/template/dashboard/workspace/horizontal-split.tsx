import { GridItem, VStack } from "@chakra-ui/react";
import { GridLayout } from "components";

export function HorizontalSplit({
  pluginScreen,
  deviceScreen,
}: {
  pluginScreen: React.ReactNode;
  deviceScreen: React.ReactNode;
}) {
  return (
    <GridLayout h="100%" gridRow={2} gap={0}>
      <GridItem w="100%" h="100%">
        {pluginScreen}
      </GridItem>
      <GridItem w="100%" h="100%">
        {deviceScreen}
      </GridItem>
    </GridLayout>
  );
}
