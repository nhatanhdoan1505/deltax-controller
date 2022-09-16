import React, { FC, useState, useCallback, useEffect, useMemo } from "react";
import cx from "classnames";
import _ from "lodash";
import Blockly, { VerticalFlyout, WorkspaceSvg } from "blockly";
import { ToolboxCategory } from ".";
// import './category.css';

interface ICategoryProps {
  workspace: WorkspaceSvg | null;
  categories: ToolboxCategory[];
}

interface ICategoryItemProps {
  category: ToolboxCategory;
  active: string;
  onClick: () => void;
}

const hideChaff = Blockly.hideChaff.bind(Blockly);

const CategoryItem: FC<ICategoryItemProps> = ({
  category,
  active,
  onClick,
}) => {
  return (
    <li
      className={cx("toolbox-item", { active: active === category.nameid })}
      onClick={onClick}
    >
      {/* <span>{category.icon}</span> */}
      <p>{category.name}</p>
      <span
        className="toolbox-item-bg"
        style={{ backgroundColor: category.color }}
      />
    </li>
  );
};

const Category: FC<ICategoryProps> = ({ categories, workspace }) => {
  const [active, setActive] = useState("");

  const xmlList = useMemo(() => {
    console.log("xml", categories);
    console.log(
      _.flatten(
        categories
          .map((c) => {
            return [
              `<label text="${c.name}" web-class="flyoutlabel"></label>`,
              ...c.blocks.map(({ type }) => `<block type="${type}"></block>`),
            ];
          })
          .concat([
            `<label text="." web-class="flyoutbottom" web-height="800"></label>`,
          ])
      ).map((t) => Blockly.Xml.textToDom(t))
    );
    return _.flatten(
      categories
        .map((c) => {
          return [
            `<label text="${c.name}" web-class="flyoutlabel"></label>`,
            ...c.blocks.map(({ type }) => `<block type="${type}"></block>`),
          ];
        })
        .concat([
          `<label text="." web-class="flyoutbottom" web-height="800"></label>`,
        ])
    ).map((t) => Blockly.Xml.textToDom(t));
  }, [categories]);

  /** show blocks */
  const showBlocks = useCallback(
    (c: ToolboxCategory) => {
      // const { blocks } = c;
      // const xmlList = blocks
      //   .map(({ type }) => `<block type="${type}"></block>`)
      //   .map((t) => Blockly.Xml.textToDom(t));
      const toolbox: any = workspace!.getToolbox();
      const flyout = toolbox?.getFlyout();
      console.log({ toolbox, xmlList });
      flyout.show(xmlList);
    },
    [workspace, xmlList]
  );

  /** hide blocks */
  const hideBlocks = useCallback(() => {
    const toolbox: any = workspace!.getToolbox();
    const flyout = toolbox.getFlyout();
    flyout.hide();
  }, [workspace]);

  const handleActiveChange = useCallback(
    (c: ToolboxCategory) => {
      if (c.nameid === active) {
        setActive("");
        hideBlocks();
      } else {
        console.log(c);
        setActive(c.nameid);
        showBlocks(c);
        // scrollToCategoryByName(c.name);
      }
    },
    [active, showBlocks, hideBlocks]
  );

  const scrollToCategoryByName = useCallback(
    (name: string) => {
      const toolbox: any = workspace!.getToolbox();
      const flyout = toolbox.getFlyout();
      const categoryScrollPositions = flyout.buttons_
        .filter((b: any) => b.text_ === name)
        .map((b: any) => b.getPosition());
      if (categoryScrollPositions.length > 0) {
        const scrollbar = flyout.scrollbar_;
        scrollbar.set(categoryScrollPositions[0].y - 10);
      }
    },
    [workspace]
  );

  /** listen flyout scroll */
  const handleScroll = useCallback(() => {
    const toolbox: any = workspace!.getToolbox();
    const flyout = toolbox.getFlyout() as any;
    const scrollbar = flyout.scrollbar_;
    const oldScrollFn = scrollbar.onScroll_.bind(scrollbar);
    scrollbar.onScroll_ = () => {
      oldScrollFn();
      for (let i = flyout.buttons_.length - 1; i >= 0; i--) {
        const b = flyout.buttons_[i];
        if (-flyout.workspace_.scrollY >= b.getPosition().y - 20) {
          const selected = categories.filter((c) => c.name === b.text_);
          if (selected.length > 0) {
            setActive(selected[0].nameid);
          }
          return;
        }
      }
    };
  }, [workspace, scrollToCategoryByName, categories]);

  useEffect(() => {
    if (!workspace) {
      return;
    }
    // handleScroll();
    Blockly.hideChaff = (opt_allowToolbox) => {
      if (!opt_allowToolbox) {
        hideBlocks();
        setActive("");
      }
      hideChaff();
    };
  }, [workspace, hideBlocks]);

  return (
    <ul className="toolbox">
      {categories.map((c) => (
        <CategoryItem
          key={c.nameid}
          category={c}
          active={active}
          onClick={() => handleActiveChange(c)}
        />
      ))}
    </ul>
  );
};

export default Category;
