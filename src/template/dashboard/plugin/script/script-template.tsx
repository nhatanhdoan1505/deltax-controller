import { FC, createElement } from "react";
import Workspace from "components/dashboard/plugin/script/blockly/workspace";
import category from "components/dashboard/plugin/script/blockly/category-data";
import { ToolboxCategory } from "components";
import { Center } from "@chakra-ui/react";

interface CategoryProps {
  [key: string]: any;
}

export function ScriptTemplate() {
  const Category: FC<CategoryProps> = ({ children, ...props }) => {
    console.log("Category");
    return createElement("category", { ...props, is: "blockly" }, children);
  };

  const Label: FC<CategoryProps> = ({ children, ...props }) => {
    return createElement("label", { ...props }, children);
  };

  interface BlockProps {
    [key: string]: any;
  }

  const Block: FC<BlockProps> = ({ children, ...props }) => {
    return createElement("block", { ...props, is: "blockly" }, children);
  };

  return (
    <Center w="100%" h="100%">
      <Workspace categories={category as unknown as ToolboxCategory[]}>
        <Category name="" />
      </Workspace>
    </Center>
  );
}
