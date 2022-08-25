import { GridItem, Text, VStack } from "@chakra-ui/react";
import { GridLayout } from "components";
import { IJoggingButton } from "type";
import { JoggingButton } from "ui";

export function StepJogging() {
  const initialValues: IJoggingButton[] = [
    { name: "0.5", type: "0.5", color: "gray" },
    { name: "1", type: "1", color: "gray" },
    { name: "10", type: "10", color: "gray" },
    { name: "50", type: "50", color: "gray" },
    { name: "100", type: "100", color: "gray" },
  ];
  return (
    <GridLayout props={{ gridColumn: 6, gap: 1 }}>
      <GridItem w="100%" h="100%">
        <VStack
          w="100%"
          h="100%"
          justifyContent="center"
          alignItems="flex-end"
          px={3}
        >
          <Text fontWeight="bold">Step</Text>
        </VStack>
      </GridItem>
      {initialValues.map((item, index) => (
        <JoggingButton {...item} key={index} />
      ))}
    </GridLayout>
  );
}
