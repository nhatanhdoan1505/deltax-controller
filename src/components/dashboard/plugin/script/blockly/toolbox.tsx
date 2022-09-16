import React, {
  createElement,
  FC,
  RefObject,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { WorkspaceSvg } from "blockly";
import { ToolboxCategory } from ".";
import Category from "./category";
// import './toolbox.css';

interface ICategoryProps {
  targetRef: RefObject<HTMLDivElement>;
  workspace: WorkspaceSvg | null;
  categories: ToolboxCategory[];
}

export const Toolbox: FC<ICategoryProps> = ({
  targetRef,
  categories,
  workspace,
}) => {
  // if (!targetRef.current) {
  //   return null;
  // }
  const [targetEl, setTargetEl] = useState<Element>(null!);

  // const targetElFunc = useMemo(() => {
  //   if (!targetRef.current) return createElement("div");
  //   const el =
  //     targetRef.current!.getElementsByClassName("blocklyToolboxDiv")[0];
  //   el.innerHTML = "";
  //   return el;
  // }, []);

  const targetElFunc = async () => {
    const elList = await targetRef.current!.getElementsByClassName(
      "blocklyToolboxDiv"
    );
    const el = elList[0];
    el.innerHTML = "";
    return el;
  };

  useEffect(() => {
    const getEl = async () => {
      if (targetRef.current) {
        const el = await targetElFunc();
        setTargetEl(el);
      }
    };

    getEl();
  }, [targetRef]);

  return (
    targetEl &&
    createPortal(
      <Category categories={categories} workspace={workspace} />,
      targetEl as Element
    )
  );
};
