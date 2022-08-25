import { HStack, VStack } from "@chakra-ui/react";
import { useHeightQuery } from "hook";
import { IAxisSlider } from "type";
import { AxisSlider } from "ui";

export function AxisController() {
  const query = useHeightQuery({ value: 600 });

  const initialValues: IAxisSlider[] = [
    { name: "4-Axis", value: 30, color: "green" },
    { name: "5-Axis", value: 30, color: "green" },
    { name: "6-Axis", value: 30, color: "green" },
  ];
  return query ? (
    <HStack w="100%">
      {initialValues.map((item) => (
        <AxisSlider {...item} key={item.name} />
      ))}
    </HStack>
  ) : (
    <VStack w="100%" justifyContent="center">
      {initialValues.map((item) => (
        <AxisSlider {...item} key={item.name} />
      ))}
    </VStack>
  );
}
