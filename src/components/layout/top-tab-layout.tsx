import { HStack, VStack, Button, Box } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

export function TopTabLayout({
  tabs,
  children,
}: {
  tabs: string[];
  children({ activeIndex }: { activeIndex: number }): ReactNode;
}) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <VStack w="100%">
      <HStack w="100%">
        {tabs.map((item, index) => (
          <Button
            key={item}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            colorScheme="green"
          >
            {item}
          </Button>
        ))}
      </HStack>
      <Box w="100%">{children({ activeIndex })}</Box>
    </VStack>
  );
}
