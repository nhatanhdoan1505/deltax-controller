import Blockly from "blockly";
// import { gCodeGenerator } from ".";

Blockly.defineBlocksWithJsonArray([
  {
    type: "linear_move",
    message0:
      "Linear Move %1 F[rate] %2 X[pos] %3 Y[pos] %4 Z[pos] %5 W[angle] %6",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "F[rate]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "X[pos]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "Y[pos]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "Z[pos]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "W[angle]",
        check: "Number",
      },
    ],
    previousStatement: null,
    colour: 230,
    tooltip: "Hello",
    helpUrl: "",
  },
]);

Blockly.JavaScript["linear_move"] = function (block: any) {
  // Search the text for a substring.
  let f = Blockly.JavaScript.valueToCode(
    block,
    "F[rate]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `F${Blockly.JavaScript.valueToCode(
        block,
        "F[rate]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let x = Blockly.JavaScript.valueToCode(
    block,
    "X[pos]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `X${Blockly.JavaScript.valueToCode(
        block,
        "X[pos]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let y = Blockly.JavaScript.valueToCode(
    block,
    "Y[pos]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `Y${Blockly.JavaScript.valueToCode(
        block,
        "Y[pos]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let z = Blockly.JavaScript.valueToCode(
    block,
    "Z[pos]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `Z${Blockly.JavaScript.valueToCode(
        block,
        "Z[pos]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let w = Blockly.JavaScript.valueToCode(
    block,
    "W[angle]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `W${Blockly.JavaScript.valueToCode(
        block,
        "W[angle]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `G0 ${f} ${x} ${y} ${z} ${w}`;
};

export default Blockly;
