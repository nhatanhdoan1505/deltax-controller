import { GridItem, Text, VStack } from "@chakra-ui/react";
import { GridLayout } from "components";
import { IStep } from "type";
import { JoggingButton } from "ui";

export function StepJogging({ step }: { step: IStep[] }) {
  return (
    <GridLayout gridColumn={6} gap={1}>
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
      {step.map((item, index) => (
        <JoggingButton {...item} key={index} />
      ))}
    </GridLayout>
  );
}
