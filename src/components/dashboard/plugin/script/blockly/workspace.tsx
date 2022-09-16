import {
  FC,
  useState,
  useRef,
  useCallback,
  useEffect,
  createElement,
  ReactNode,
} from "react";
import Blockly, { WorkspaceSvg } from "blockly";
import { ToolboxCategory } from ".";
import { Toolbox } from ".";
import ZelosTheme from "./zelos";

interface IWorkSpaceProps {
  /** init blocks */
  initialXml?: string;
  /** wrap className */
  wrapClassname?: string;
  categories?: ToolboxCategory[];
  children?: ReactNode;
}

const BlocklyWorkSpace: FC<IWorkSpaceProps> = ({
  wrapClassname,
  categories,
  children,
}) => {
  const [workspace, setWorkspace] = useState<WorkspaceSvg | null>(null);
  const blocklyDivRef = useRef<HTMLDivElement>(null);
  const toolboxRef = useRef<HTMLElement>(null);

  const inject = useCallback(() => {
    if (!blocklyDivRef.current) {
      return;
    }

    console.log("inject");
    const workspace = Blockly.inject(blocklyDivRef.current, {
      renderer: "thrasos", // geras / thrasos / zelos
      toolbox: toolboxRef.current!,
      sounds: true,
      trashcan: true,
      collapse: true,
      // comments: true,
      disable: false,
      readOnly: false,
      toolboxPosition: "end",
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
        controls: false,
        maxScale: 2.5,
        minScale: 0.2,
        scaleSpeed: 1.5,
        startScale: 1,
      },
      rtl: false,
    } as any);

    setWorkspace(workspace);
  }, []);

  useEffect(() => {
    inject();
  }, []);
  
  return (
    <div
      className={wrapClassname}
      style={{ width: "100%", height: "100vh", overflow: "auto" }}
      ref={blocklyDivRef}
    >
      {createElement(
        "xml",
        {
          xmlns: "https://developers.google.com/blockly/xml",
          is: "blockly",
          style: { display: "none" },
          ref: toolboxRef,
        },
        children
      )}
      <Toolbox
        targetRef={blocklyDivRef}
        workspace={workspace}
        categories={categories as ToolboxCategory[]}
      />
    </div>
  );
};

export default BlocklyWorkSpace;
