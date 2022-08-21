import { Box, HStack, VStack } from "@chakra-ui/react";
import { JoggingButton } from "ui";
import { ButtonController, StepJogging, XYZController } from ".";

export function Jogging() {
  return (
    <VStack w="100%" justifyContent="flex-start" alignItems="center">
      <HStack w="100%" justifyContent="center" alignItems="center">
        <Box>
          <JoggingButton color="teal" name="HOME" type="HOME" />
        </Box>
        <StepJogging />
      </HStack>
      <VStack w="100%" justifyContent="center">
        <XYZController />
        <ButtonController />
      </VStack>
    </VStack>
  );
}
