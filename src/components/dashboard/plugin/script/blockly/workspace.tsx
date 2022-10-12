import { Box, Button, HStack } from "@chakra-ui/react";
import Blockly, { WorkspaceSvg } from "blockly";
import { useEffect, useRef, useState } from "react";
import ToolBox from "./toolbox.json";
import ZelosTheme from "./zelos";
import CustomBlock from "./custom-block";

export const BlocklyWorkSpace = () => {
  const [workspace, setWorkspace] = useState<WorkspaceSvg | null>(null);
  const blocklyDivRef = useRef<HTMLDivElement>(null);
  const [workspaceState, setWorkspaceState] = useState<{
    [x: string]: any;
  }>({});

  const injectBlockly = (): WorkspaceSvg => {
    return Blockly.inject(
      blocklyDivRef.current as HTMLDivElement,
      {
        renderer: "thrasos", // geras / thrasos / zelos
        toolbox: ToolBox,
        // theme: ZelosTheme,
        grid: {
          spacing: 25,
          length: 3,
          colour: "#ccc",
          snap: true,
        },
        zoom: {
          controls: true,
          startScale: 0.9,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2,
        },
        // sounds: true,
        // trashcan: true,
        // collapse: true,
        // comments: true,
        // disable: false,
        // readOnly: false,
        // toolboxPosition: "start",
        // scrollbars: false,
        // grid: {
        //   spacing: 20,
        //   length: 0,
        //   snap: true,
        // },
        // move: {
        //   scrollbars: {
        //     horizontal: true,
        //     vertical: false,
        //   },
        //   drag: true,
        //   wheel: true,
        // },
        // zoom: {
        //   controls: true,
        //   wheel: false,
        //   startScale: 1.0,
        //   maxScale: 3,
        //   minScale: 0.3,
        //   scaleSpeed: 1.2,
        //   pinch: true,
        // },
        // rtl: false,
      } as any
    );
  };

  useEffect(() => {
    if (!blocklyDivRef.current || workspace) return;
    setWorkspace(injectBlockly());
  }, []);

  useEffect(() => {
    workspace &&
      workspace?.addChangeListener(() =>
        setWorkspaceState(Blockly.serialization.workspaces.save(workspace))
      );
  }, [workspace]);

  useEffect(() => {
    workspace &&
      Blockly.serialization.workspaces.load(workspaceState, workspace);
  }, []);

  const exportCode = () => {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    console.log(code);
  };

  return (
    <Box w="100%" h="100%" ref={blocklyDivRef}>
      <HStack>
        <Button onClick={exportCode}>Export</Button>
        <Button onClick={() => workspace?.undo(false)}>Undo</Button>
        <Button onClick={() => workspace?.undo(true)}>Redo</Button>
      </HStack>
    </Box>
  );
};
