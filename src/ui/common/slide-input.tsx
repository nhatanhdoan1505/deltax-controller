import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  SystemProps,
} from "@chakra-ui/react";

interface IProps extends SystemProps {
  value: number;
}
export function SlideInput({ value, ...props }: IProps) {
  return (
    <Slider {...props} value={value}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
}
