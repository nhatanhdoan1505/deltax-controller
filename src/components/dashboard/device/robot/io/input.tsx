import {
  Box,
  Button,
  GridItem,
  HStack,
  SystemProps,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BoxWithTitle, GridLayout, ResponsiveLayout } from "components";
import { IInput } from "type";
import { CheckboxButton, NumberInput } from "ui";

interface IProps extends SystemProps {
  input: IInput[];
}
export function Input({ input, ...props }: IProps) {
  return (
    <BoxWithTitle title="Input">
      <ResponsiveLayout {...props}>
        {input.map(({ name, value, type, isCheckbox }) => (
          <Box key={name}>
            <GridLayout gridColumn={4}>
              <GridItem>
                <Text>{name}</Text>
              </GridItem>
              <GridItem>
                {value ? <Text>{value}</Text> : <Text>NULL</Text>}
              </GridItem>
              <GridItem>
                {isCheckbox ? (
                  <CheckboxButton name="Wait Toggle" />
                ) : (
                  <NumberInput value={0} placeholder="0 ms" />
                )}
              </GridItem>
              <GridItem>
                <HStack w="100%" justifyContent="center">
                  <Button colorScheme="gray">READ</Button>
                </HStack>
              </GridItem>
            </GridLayout>
          </Box>
        ))}
      </ResponsiveLayout>
    </BoxWithTitle>
  );
}
