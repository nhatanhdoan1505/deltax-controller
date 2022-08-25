import { Button, GridItem } from "@chakra-ui/react";
import { IMenuButton } from "type";

export function MenuButton({ index, name, color, rootIndex }: IMenuButton) {
  return (
    <GridItem w="100%">
      <Button
        colorScheme={color}
        w="100%"
        h="100%"
        isActive={rootIndex === index}
        fontSize="sm"
        whiteSpace="pre-line"
        size="sm"
        variant="outline"
      >
        {name}
      </Button>
    </GridItem>
  );
}
