import { HStack, VStack, Text, Box, GridItem } from "@chakra-ui/react";
import { BoxWithTitle, GridLayout, ResponsiveLayout } from "components";
import { IOutput } from "type";
import { CheckboxButton, NumberInput, SelectButton } from "ui";

export function Output({ custom, digital, pwm, rcServo }: IOutput) {
  return (
    <BoxWithTitle title="Output">
      <GridLayout w="100%" gridRow={5} gridColumn={8} gap={1}>
        <GridItem colSpan={1}>
          <Text>Custom</Text>
        </GridItem>
        <GridItem colSpan={7}>
          <HStack>
            {custom.map((item) => (
              <HStack key={item.name}>
                <CheckboxButton />
                <SelectButton options={[item]} />
              </HStack>
            ))}
          </HStack>
        </GridItem>

        <GridItem colSpan={1}>
          <Text>Digital</Text>
        </GridItem>
        <GridItem colSpan={7}>
          <ResponsiveLayout w="100%" gridColumn={4}>
            {digital.map((item) => (
              <Box key={item.name}>
                <CheckboxButton {...item} w="auto" />
              </Box>
            ))}
          </ResponsiveLayout>
        </GridItem>

        <GridItem colSpan={1}>
          <Text>PWM</Text>
        </GridItem>
        <GridItem colSpan={7}>
          <HStack w="100%">
            {pwm.map(({ name, type }) => (
              <HStack key={name}>
                <Text>{name}</Text>
                <NumberInput value={type as number} />
              </HStack>
            ))}
          </HStack>
        </GridItem>

        <GridItem colSpan={1}>
          <Text whiteSpace="nowrap">Rc Servo</Text>
        </GridItem>
        <GridItem colSpan={7}>
          <HStack w="100%">
            {rcServo.map(({ name, type }) => (
              <HStack key={name}>
                <Text>{name}</Text>
                <NumberInput value={type as number} />
              </HStack>
            ))}
          </HStack>
        </GridItem>
      </GridLayout>
    </BoxWithTitle>
  );
}
