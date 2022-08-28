import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  SystemProps,
} from "@chakra-ui/react";

export function SlideInput(props: SystemProps) {
  return (
    <Slider {...props}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
}
