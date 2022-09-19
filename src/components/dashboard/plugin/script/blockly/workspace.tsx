import { Box, Button } from "@chakra-ui/react";
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
        renderer: "zelos", // geras / thrasos / zelos
        toolbox: ToolBox,
        sounds: true,
        trashcan: true,
        collapse: true,
        comments: true,
        disable: false,
        readOnly: false,
        toolboxPosition: "start",
        theme: ZelosTheme,
        grid: {
          spacing: 20,
          length: 0,
          snap: true,
        },
        move: {
          scrollbars: {
            horizontal: true,
            vertical: true,
          },
          drag: true,
          wheel: false,
        },
        zoom: {
          controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2,
          pinch: true,
        },
        rtl: false,
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
      <Button onClick={exportCode}>Export</Button>
    </Box>
  );
};
