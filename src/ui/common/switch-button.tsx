import { HStack, Switch, Text, VStack } from "@chakra-ui/react";

export function SwitchButton({
  isHorizontal = true,
  name,
  onClick,
}: {
  isHorizontal: boolean;
  name: string;
  onClick: () => void;
}) {
  return isHorizontal ? (
    <HStack>
      <Text fontWeight="bold">{name}</Text>
      <Switch size="sm" onChange={(e) => console.log(e)} />
    </HStack>
  ) : (
    <VStack>
      <Text fontWeight="bold">{name}</Text>
      <Switch size="sm" onChange={(e) => console.log(e)} />
    </VStack>
  );
}
