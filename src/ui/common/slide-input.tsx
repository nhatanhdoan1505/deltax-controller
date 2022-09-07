import {
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  SystemProps,
} from "@chakra-ui/react";

interface IProps extends SystemProps {
  value: number;
  onChange?: (value: number) => void;
}
export function SlideInput({ value, onChange, ...props }: IProps) {
  return (
    <Slider
      {...props}
      // value={value}
      onChangeEnd={(e) => {
        console.log(e);
      }}
    >
      <SliderMark
        value={value}
        textAlign="center"
        bg="blue.500"
        color="white"
        mt="-10"
        ml="-5"
        w="12"
      >
        {/* {value} */}
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
}
