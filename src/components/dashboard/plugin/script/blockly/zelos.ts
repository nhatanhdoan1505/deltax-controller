import Blockly from "blockly";

const defaultBlockStyles: { [key: string]: Blockly.Theme.BlockStyle } = {
  colour_blocks: {
    colourPrimary: "#CF63CF",
    colourSecondary: "#C94FC9",
    colourTertiary: "#BD42BD",
    hat: "",
  },
  list_blocks: {
    colourPrimary: "#9966FF",
    colourSecondary: "#855CD6",
    colourTertiary: "#774DCB",
    hat: "",
  },
  logic_blocks: {
    colourPrimary: "#4C97FF",
    colourSecondary: "#4280D7",
    colourTertiary: "#3373CC",
    hat: "",
  },
  loop_blocks: {
    colourPrimary: "#0fBD8C",
    colourSecondary: "#0DA57A",
    colourTertiary: "#0B8E69",
    hat: "",
  },
  math_blocks: {
    colourPrimary: "#59C059",
    colourSecondary: "#46B946",
    colourTertiary: "#389438",
    hat: "",
  },
  procedure_blocks: {
    colourPrimary: "#FF6680",
    colourSecondary: "#FF4D6A",
    colourTertiary: "#FF3355",
    hat: "",
  },
  text_blocks: {
    colourPrimary: "#FFBF00",
    colourSecondary: "#E6AC00",
    colourTertiary: "#CC9900",
    hat: "",
  },
  variable_blocks: {
    colourPrimary: "#FF8C1A",
    colourSecondary: "#FF8000",
    colourTertiary: "#DB6E00",
    hat: "",
  },
  variable_dynamic_blocks: {
    colourPrimary: "#FF8C1A",
    colourSecondary: "#FF8000",
    colourTertiary: "#DB6E00",
    hat: "",
  },
  hat_blocks: {
    colourPrimary: "#4C97FF",
    colourSecondary: "#4280D7",
    colourTertiary: "#3373CC",
    hat: "cap",
  },
};

const componentStyles: Blockly.Theme.ComponentStyle = {
  workspaceBackgroundColour: "#f0f0f0",
  toolboxBackgroundColour: "#333",
  toolboxForegroundColour: "#fff",
  flyoutBackgroundColour: "#252526",
  flyoutForegroundColour: "#ccc",
  flyoutOpacity: 1,
  scrollbarColour: "#797979",
  insertionMarkerColour: "#fff",
  insertionMarkerOpacity: 0.3,
  scrollbarOpacity: 0,
  cursorColour: "#d0d0d0",
  markerColour: "#f00",
  selectedGlowColour: "#f00",
  selectedGlowOpacity: 1,
  replacementGlowColour: "#f00",
  replacementGlowOpacity: 1,
};

export default new Blockly.Theme(
  "zeloss",
  defaultBlockStyles,
  {},
  componentStyles
);
