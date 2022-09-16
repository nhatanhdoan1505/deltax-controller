import { ToolboxCategory } from "./type";

const categories: ToolboxCategory[] = [
  {
    nameid: "logic",
    name: "Logic",
    color: "#527fd9",
    icon: "\uf074",
    blocks: [
      {
        type: "logic_compare",
      },
      {
        type: "logic_operation",
      },
      {
        type: "logic_negate",
      },
      {
        type: "logic_boolean",
      },
      {
        type: "logic_null",
      },
      {
        type: "logic_ternary",
      },
    ],
  },
  {
    nameid: "control",
    name: "Control",
    icon: "\uf1ec",
    color: "#64acd1",
    blocks: [
      {
        type: "controls_if",
      },
      {
        type: "controls_ifelse",
      },
      {
        type: "controls_if_if",
      },
      {
        type: "controls_if_elseif",
      },
    ],
  },
  {
    nameid: "loops",
    name: "Loops",
    color: "#9e5bd1",
    icon: "\uf01e",
    blocks: [
      {
        type: "controls_repeat_ext",
      },
      {
        type: "controls_repeat",
      },
      {
        type: "controls_whileUntil",
      },
      {
        type: "controls_for",
      },
      {
        type: "controls_forEach",
      },
      {
        type: "controls_flow_statements",
      },
    ],
  },
  {
    nameid: "text",
    name: "Text",
    color: "#e3818a",
    icon: "\uf035",
    blocks: [
      {
        type: "text",
      },
      {
        type: "text_multiline",
      },
      {
        type: "text_join",
      },
      {
        type: "text_create_join_container",
      },
      {
        type: "text_create_join_item",
      },
      {
        type: "text_append",
      },
      {
        type: "text_length",
      },
      {
        type: "text_isEmpty",
      },
      {
        type: "text_indexOf",
      },
      {
        type: "text_charAt",
      },
    ],
  },
  {
    nameid: "variables",
    name: "Variables",
    icon: "\uf039",
    color: "#2fb651",
    blocks: [
      {
        type: "variables_get",
      },
      {
        type: "variables_set",
      },
      {
        type: "variables_get_dynamic",
      },
      {
        type: "variables_set_dynamic",
      },
    ],
  },
  {
    nameid: "math",
    name: "Math",
    icon: "\uf1ec",
    color: "#ed4b4d",
    blocks: [
      {
        type: "math_number",
      },
      {
        type: "math_arithmetic",
      },
      {
        type: "math_single",
      },
      {
        type: "math_trig",
      },
      {
        type: "math_constant",
      },
      {
        type: "math_number_property",
      },
      {
        type: "math_change",
      },
      {
        type: "math_round",
      },
      {
        type: "math_on_list",
      },
      {
        type: "math_modulo",
      },
      {
        type: "math_constrain",
      },
      {
        type: "math_random_int",
      },
      {
        type: "math_random_float",
      },
      {
        type: "math_atan2",
      },
    ],
  },
  {
    nameid: "colour",
    name: "Colour",
    icon: "\uf039",
    color: "#dca154",
    blocks: [
      {
        type: "colour_picker",
      },
      {
        type: "colour_random",
      },
      {
        type: "colour_rgb",
      },
      {
        type: "colour_blend",
      },
    ],
  },
  {
    nameid: "lists",
    name: "Lists",
    icon: "\uf039",
    color: "#62beab",
    blocks: [
      {
        type: "lists_create_empty",
      },
      {
        type: "lists_repeat",
      },
      {
        type: "lists_reverse",
      },
      {
        type: "lists_isEmpty",
      },
      {
        type: "lists_length",
      },
    ],
  },
  {
    nameid: "procedures",
    name: "Procedures",
    color: "#da8446",
    icon: "",
    blocks: [
      {
        type: "procedures_defnoreturn",
      },
      {
        type: "procedures_defreturn",
      },
      {
        type: "procedures_mutatorcontainer",
      },
      {
        type: "procedures_mutatorarg",
      },
      {
        type: "procedures_callnoreturn",
      },
      {
        type: "procedures_callreturn",
      },
    ],
  },
];

export default categories;
