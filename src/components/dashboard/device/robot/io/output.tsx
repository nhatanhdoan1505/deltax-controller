import { HStack, VStack, Text, Box } from "@chakra-ui/react";
import { BoxWithTitle, ResponsiveLayout } from "components";
import { IOutput } from "type";
import { CheckboxButton, NumberInput, SelectButton } from "ui";

export function Output({ custom, digital, pwm, rcServo }: IOutput) {
  return (
    <BoxWithTitle title="Output">
      <VStack w="100%">
        <HStack w="100%">
          <Text>Custom</Text>
          <HStack>
            {custom.map((item) => (
              <HStack key={item.name}>
                <CheckboxButton />
                <SelectButton {...item} />
              </HStack>
            ))}
          </HStack>
        </HStack>
        <HStack w="100%">
          <Text>Digital</Text>
          <ResponsiveLayout w="100%" gridColumn={5}>
            {digital.map((item) => (
              <Box key={item.name}>
                <CheckboxButton {...item} w="auto" />
              </Box>
            ))}
          </ResponsiveLayout>
        </HStack>
        <HStack w="100%">
          <Text>PWM</Text>
          <HStack w="100%" justifyContent="space-around">
            {pwm.map(({ name, type }) => (
              <HStack key={name}>
                <Text>{name}</Text>
                <NumberInput value={type as number} />
              </HStack>
            ))}
          </HStack>
        </HStack>
        <HStack w="100%">
          <Text whiteSpace="nowrap">Rc Servo</Text>
          <HStack w="100%" justifyContent="space-around">
            {rcServo.map(({ name, type }) => (
              <HStack key={name}>
                <Text>{name}</Text>
                <NumberInput value={type as number} />
              </HStack>
            ))}
          </HStack>
        </HStack>
      </VStack>
    </BoxWithTitle>
  );
}
