import { VStack } from "@chakra-ui/react";
import { ModuleMenu } from "components";
import { DashboardTemplate } from "template";

export function MainPage() {
  return (
    <VStack w="100%" h="100vh">
      <ModuleMenu />
      <DashboardTemplate />;
    </VStack>
  );
}
