import {
  NumberInputField,
  SystemProps,
  NumberInput as Input,
} from "@chakra-ui/react";
import { useSlideInput } from "hook";
import { HTMLAttributes } from "react";

interface IProps
  extends SystemProps,
    Omit<HTMLAttributes<HTMLInputElement>, "color"> {
  value: number;
}
export function NumberInput({ value, ...props }: IProps) {
  const {
    number,
    setNumber,
    onTouchMoveHandler,
    setStartValue,
    onMouseMoveHandler,
  } = useSlideInput({ value });
  return (
    <Input value={number}>
      <NumberInputField
        {...props}
        onChange={(e) => setNumber(+e.target.value)}
        onTouchMove={onTouchMoveHandler}
        onTouchEnd={() => setStartValue(null!)}
        onMouseDown={(e) => setStartValue(e.clientX)}
        onMouseUp={() => setStartValue(null!)}
        onMouseMove={onMouseMoveHandler}
        textAlign="center"
      />
    </Input>
  );
}
