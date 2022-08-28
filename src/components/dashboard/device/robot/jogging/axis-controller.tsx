import { HStack, VStack } from "@chakra-ui/react";
import { useHeightQuery } from "hook";
import { IAxisSlider } from "type";
import { AxisSlider } from "ui";

export function AxisController({ axis }: { axis: IAxisSlider[] }) {
  const query = useHeightQuery({ value: 600 });

  return query ? (
    <HStack w="100%">
      {axis.map((item) => (
        <AxisSlider {...item} key={item.name} />
      ))}
    </HStack>
  ) : (
    <VStack w="100%" justifyContent="center">
      {axis.map((item) => (
        <AxisSlider {...item} key={item.name} />
      ))}
    </VStack>
  );
}
