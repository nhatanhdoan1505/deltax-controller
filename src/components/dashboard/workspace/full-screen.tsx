import { GridItem } from "@chakra-ui/react";
import { GridLayout } from "components";

export function FullScreen({ children }: { children: React.ReactNode }) {
  return (
    <GridLayout props={{ h: "100%", gap: 0 }}>
      <GridItem w="100%" h="100%" colSpan={2}>
        {children}
      </GridItem>
    </GridLayout>
  );
}
