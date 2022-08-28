import { Button, HStack, Input, Text } from "@chakra-ui/react";
import { useHeightQuery, useSlideInput } from "hook";
import { IAxisSlider } from "type";
import { NumberInput } from ".";

export function AxisSlider({ name, value, color }: IAxisSlider) {
  const {
    number,
    setNumber,
    onTouchMoveHandler,
    setStartValue,
    onMouseMoveHandler,
  } = useSlideInput({ value });
  const query = useHeightQuery({ value: 600 });

  return (
    <HStack w="100%">
      <Text fontWeight="bold" whiteSpace="nowrap">
        {name}
      </Text>
      {!query && (
        <Button
          colorScheme="green"
          variant="outline"
          onClick={() => setNumber(number - 1)}
        >
          -
        </Button>
      )}
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
      {!query && (
        <Button
          colorScheme="green"
          variant="outline"
          onClick={() => setNumber(number + 1)}
        >
          +
        </Button>
      )}
    </HStack>
  );
}
