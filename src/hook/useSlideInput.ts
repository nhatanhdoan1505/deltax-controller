import { useState, TouchEvent, MouseEvent } from "react";

export const useSlideInput = ({
  value,
  min,
  max,
}: {
  value: number;
  min?: number;
  max?: number;
}) => {
  const ratio = { touch: 1, mouse: 1 / 2 };
  const [number, _setNumber] = useState<number>(value);
  const [startValue, setStartValue] = useState<number>(null!);

  const setNumber = (value: number) => {
    let _value = min && value < min ? min : max && value > max ? max : value;

    _setNumber(_value);
  };

  const onTouchMoveHandler = (e: TouchEvent<HTMLInputElement>) => {
    if (!startValue) {
      setStartValue(e.touches[0].clientX);
      return;
    }
    const clientX = e.touches[0].clientX;
    let gap = Math.floor(clientX - startValue);
    if (Math.abs(gap) * ratio.touch >= 1) {
      setNumber(Math.floor(number + gap));
      setStartValue(clientX);
    }
  };

  const onMouseMoveHandler = (e: MouseEvent<HTMLInputElement>) => {
    if (!startValue) return;
    const clientX = e.clientX;
    let gap = Math.floor(clientX - startValue);
    if (Math.abs(gap) * ratio.mouse >= 1) {
      setNumber(Math.floor(number + gap));
      setStartValue(clientX);
    }
  };

  return {
    number,
    setNumber,
    onTouchMoveHandler,
    setStartValue,
    onMouseMoveHandler,
  };
};
