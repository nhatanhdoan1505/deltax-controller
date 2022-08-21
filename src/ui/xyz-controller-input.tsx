import { Button, GridItem, HStack, Input, Text } from "@chakra-ui/react";
import { useSlideInput } from "hook";

export function XYZControllerInput({
  value,
  name,
}: {
  value: number;
  name: string;
}) {
  const {
    number,
    setNumber,
    onTouchMoveHandler,
    setStartValue,
    onMouseMoveHandler,
  } = useSlideInput({ value });

  return (
    <GridItem w="100%">
      <HStack w="100%">
        <Text fontWeight="bold">{name}</Text>
        <Input
          type="number"
          value={number}
          onChange={(e) => setNumber(+e.target.value)}
          onTouchMove={onTouchMoveHandler}
          onTouchEnd={() => setStartValue(null!)}
          onMouseDown={(e) => setStartValue(e.clientX)}
          onMouseUp={() => setStartValue(null!)}
          onMouseMove={onMouseMoveHandler}
        />
      </HStack>
    </GridItem>
  );
}
