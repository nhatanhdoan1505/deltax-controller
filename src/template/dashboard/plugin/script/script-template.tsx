import { Center } from "@chakra-ui/react";
import { BlocklyWorkSpace } from "components";

interface CategoryProps {
  [key: string]: any;
}

export function ScriptTemplate() {
  return (
    <Center w="100%" h="100%">
      <BlocklyWorkSpace />
    </Center>
  );
}
