import { GridItem, HStack, Text } from "@chakra-ui/react";
import { AppContext } from "store";
import { ReactNode, useContext } from "react";

export function ModuleMenuButton({
  name,
  index,
}: {
  name: string | ReactNode;
  index: number;
}) {
  const { state } = useContext(AppContext);
  const { module } = state;
  return (
    <GridItem
      backgroundColor={module === index ? "#48BB78" : "white"}
      borderRadius="base"
    >
      <HStack
        w="100%"
        justifyContent="center"
        alignItems="center"
        h="100%"
        px={1}
      >
        <Text textAlign="center" color={module === index ? "white" : "black"}>
          {name}
        </Text>
      </HStack>
    </GridItem>
  );
}
