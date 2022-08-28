import { Input } from "@chakra-ui/react";
import { useSlideInput } from "hook";

export function NumberInput({ value }: { value: number }) {
  const {
    number,
    setNumber,
    onTouchMoveHandler,
    setStartValue,
    onMouseMoveHandler,
  } = useSlideInput({ value });
  return (
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
  );
}
