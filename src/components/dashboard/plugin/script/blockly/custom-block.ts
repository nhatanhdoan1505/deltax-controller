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
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "linear_movement",
    message0:
      "Linear Movement %1 X[pos] %2 Y[pos] %3 Z[pos] %4 W[angle] %5 U[angle] %6 V[angle] %7 F[value] %8 A[value] %9 J[value] %10 S[value] %11 E[value] %12",
    args0: [
      {
        type: "input_dummy",
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
      {
        type: "input_value",
        name: "U[angle]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "V[angle]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "F[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "A[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "J[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "S[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "E[value]",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "arc_or_circle_move",
    message0:
      "Arc or Circle Move %1 F[rate] %2 I[offset] %3 J[offset] %4 X[pos] %5 Y[pos] %6 W[angle] %7",
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
        name: "I[offset]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "J[offset]",
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
        name: "W[angle]",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "dwell_delay",
    message0: "Dwell/Delay %1 P[time] %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "P[time]",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "controlled_arc_movement",
    message0:
      "Controlled Arc Movement %1 I[offset] %2 J[offset] %3 X[pos] %4 Y[pos] %5 F[value] %6 A[value] %7 S[value] %8 E[value] %9",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "I[offset]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "J[offset]",
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
        name: "F[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "A[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "S[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "E[value]",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "bezier_cubic_spline",
    message0:
      "Bezier cubic spline %1 F[rate] %2 I[offset] %3 J[offset] %4 P[offset] %5 Q[offset] %6 X[pos] %7 Y[pos] %8",
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
        name: "I[offset]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "J[offset]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "P[offset]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "Q[offset]",
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
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "theta_angle_control",
    message0:
      "Theta angle control %1 F[rate] %2 X[angle] %3 Y[angle] %4 Z[angle] %5 P[pos] %6",
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
        name: "X[angle]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "Y[angle]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "Z[angle]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "P[pos]",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "homing",
    message0: "Homing",
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "absolute_movement_mode",
    message0: "Absolute Movement Mode",
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "relative_movement_mode",
    message0: "Relative Movement Mode",
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "get_current_position",
    message0: "Get Current Position",
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "turn_ouput_on___set_pwm",
    message0:
      "Turn Ouput On / Set PWM %1 Lager Range %2 %3 D[x] %4 P[x] %5 W[y] %6",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "field_checkbox",
        name: "Lager Range",
        checked: true,
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "D[x]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "P[x]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "W[y]",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 210,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "ouput_off___turn_off_pwm",
    message0: "Ouput Off / Turn Off PWM %1 D[x] %2 P[x] %3",
    args0: [
      {
        type: "input_dummy",
      },

      {
        type: "input_value",
        name: "D[x]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "P[x]",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 210,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "read_input_signals",
    message0: "Read Input Signals Automatically I[x] %1 A[x] %2",
    args0: [
      {
        type: "field_dropdown",
        name: "I[x]",
        options: [
          ["0", "0"],
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
          ["5", "5"],
          ["6", "6"],
          ["7", "7"],
        ],
      },
      {
        type: "field_dropdown",
        name: "A[x]",
        options: [
          ["0", "0"],
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
        ],
      },
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "read_input_signals_automatically",
    message0:
      "Read Input Signals Automatically I[x] %1 B[y] %2 A[x] %3 C[y] %4 P[i] %5",
    args0: [
      {
        type: "field_dropdown",
        name: "I[x]",
        options: [
          ["0", "0"],
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
          ["5", "5"],
          ["6", "6"],
          ["7", "7"],
        ],
      },
      {
        type: "field_dropdown",
        name: "B[y]",
        options: [
          ["0", "0"],
          ["1", "1"],
        ],
      },
      {
        type: "field_dropdown",
        name: "A[x]",
        options: [
          ["0", "0"],
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
        ],
      },
      {
        type: "input_value",
        name: "C[y]",
        check: "Number",
      },
      {
        type: "field_dropdown",
        name: "P[i]",
        options: [
          ["USB", "0"],
          ["RS232", "1"],
          ["RS485", "2"],
          ["TTL", "3"],
          ["RJ45", "3"],
        ],
      },
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "open_rs232_port",
    message0: "Open RS232 port A[x] %1 B[y] %2",
    args0: [
      {
        type: "field_dropdown",
        name: "A[x]",
        options: [
          ["Open Port", "0"],
          ["Close Port", "1"],
        ],
      },
      {
        type: "input_value",
        name: "B[y]",
        check: "Number",
      },
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "open_rs485_port",
    message0: "Open RS485 port A[x] %1 B[y] %2",
    args0: [
      {
        type: "field_dropdown",
        name: "A[x]",
        options: [
          ["Open Port", "0"],
          ["Close Port", "1"],
        ],
      },
      {
        type: "input_value",
        name: "B[y]",
        check: "Number",
      },
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "open_ttl_port",
    message0: "Open TTL port A[x] %1 B[y] %2",
    args0: [
      {
        type: "field_dropdown",
        name: "A[x]",
        options: [
          ["Open Port", "0"],
          ["Close Port", "1"],
        ],
      },
      {
        type: "input_value",
        name: "B[y]",
        check: "Number",
      },
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "get_ports_config",
    message0: "Get Ports Config",
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "enable_rj45",
    message0: "Enable RJ45 A[x] %1",
    args0: [
      {
        type: "field_dropdown",
        name: "A[x]",
        options: [
          ["enable RJ45", "0"],
          ["disable RJ45", "1"],
        ],
      },
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_ethernet_port",
    message0: "Set Ethernet Port B[x] %1",
    args0: [
      {
        type: "input_value",
        name: "B[x]",
        check: "Number",
      },
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_mac_device",
    message0: "Set MAC Device A[x] %1 B[y] %2 C[z] %3 D[t] %4 E[u] %5 F[v] %6",
    args0: [
      {
        type: "input_value",
        name: "A[x]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "B[y]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "C[z]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "D[t]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "E[u]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "F[v]",
        check: "Number",
      },
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_ethernet_ip",
    message0: "Set Ethernet IP A[x] %1 B[y] %2 C[z] %3 D[t] %4",
    args0: [
      {
        type: "input_value",
        name: "A[x]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "B[y]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "C[z]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "D[t]",
        check: "Number",
      },
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_ethernet_dns",
    message0: "Set Ethernet DNS A[x] %1 B[y] %2 C[z] %3 D[t] %4",
    args0: [
      {
        type: "input_value",
        name: "A[x]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "B[y]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "C[z]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "D[t]",
        check: "Number",
      },
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_ethernet_gateway",
    message0: "Set Ethernet Gateway A[x] %1 B[y] %2 C[z] %3 D[t] %4",
    args0: [
      {
        type: "input_value",
        name: "A[x]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "B[y]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "C[z]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "D[t]",
        check: "Number",
      },
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_ethernet_subnet",
    message0: "Set Ethernet Subnet A[x] %1 B[y] %2 C[z] %3 D[t] %4",
    args0: [
      {
        type: "input_value",
        name: "A[x]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "B[y]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "C[z]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "D[t]",
        check: "Number",
      },
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "get_robot_ip",
    message0: "Get Robot IP",
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_axis_4_parameters",
    message0:
      "Set Axis 4 Parameters F[value] %1 A[value] %2 J[value] %3 S[value] %4 E[value] %5",
    args0: [
      {
        type: "input_value",
        name: "F[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "A[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "J[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "S[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "E[value]",
        check: "Number",
      },
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_axis_5_parameters",
    message0:
      "Set Axis 5 Parameters F[value] %1 A[value] %2 J[value] %3 S[value] %4 E[value] %5",
    args0: [
      {
        type: "input_value",
        name: "F[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "A[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "J[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "S[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "E[value]",
        check: "Number",
      },
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_axis_6_parameters",
    message0:
      "Set Axis 6 Parameters F[value] %1 A[value] %2 J[value] %3 S[value] %4 E[value] %5",
    args0: [
      {
        type: "input_value",
        name: "F[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "A[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "J[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "S[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "E[value]",
        check: "Number",
      },
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "disable_steppers",
    message0: "Disable Steppers",
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_auto_feedback_position",
    message0: "Set Auto Feedback Position A[x] %1 B[y] %2",
    args0: [
      {
        type: "field_dropdown",
        name: "A[ena]",
        options: [
          ["enable", "0"],
          ["disable", "1"],
        ],
      },
      {
        type: "input_value",
        name: "B[time]",
        check: "Number",
      },
      {
        type: "field_dropdown",
        name: "C[port]",
        options: [
          ["USB", "0"],
          ["RS232", "1"],
          ["RS485", "1"],
          ["TTL", "1"],
          ["RS232", "1"],
          ["RJ45", "1"],
        ],
      },
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_auto_feedback_position",
    message0: "Set Auto Feedback Position A[x] %1 B[y] %2 %C[port] %3",
    args0: [
      {
        type: "field_dropdown",
        name: "A[ena]",
        options: [
          ["enable", "0"],
          ["disable", "1"],
        ],
      },
      {
        type: "input_value",
        name: "B[time]",
        check: "Number",
      },
      {
        type: "field_dropdown",
        name: "C[port]",
        options: [
          ["USB", "0"],
          ["RS232", "1"],
          ["RS485", "1"],
          ["TTL", "1"],
          ["RS232", "1"],
          ["RJ45", "1"],
        ],
      },
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_jerk",
    message0: "Set Jerk J[value] %1",
    args0: [
      {
        type: "input_value",
        name: "J[value]",
        check: "Number",
      },
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_max_acceleration",
    message0: "Set Max Acceleration A[value] %1",
    args0: [
      {
        type: "input_value",
        name: "A[value]",
        check: "Number",
      },
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "output_on_laser_on_vaccum_on_gripper_close",
    message0: "Output On / Laser On / Vacuum On / Gripper Close %1 S[value] %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "S[value]",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "output_off_laser_off_vaccum_off_gripper_open",
    message0: "Ouput Off / Laser Off / Vacuum Off / Gripper Open",
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "disable_steppers",
    message0: "Disable Steppers",
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_hotend_temperature",
    message0: "Set Hotend Temperature %1 S[temp] %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "S[temp]",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "report_temperature",
    message0: "Report Temperature %1 S[temp] %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "S[temp]",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "wait_for_hotend_temperature",
    message0: "Wait For Temperature %1 S[temp] %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "S[temp]",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_max_feedrate_s",
    message0: "Set Max Feedrate %1 S[value] %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "S[value]",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_max_feedrate_a",
    message0: "Set Max Feedrate %1 A[value] %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "A[value]",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_begin_end_velocity",
    message0: "Set Begin/End Velocity %1 S[value] %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "S[value]",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_z_offset",
    message0: "Set Z Offset %1 Z[value] %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "Z[value]",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_axis_offset",
    message0:
      "Set Axis Offset %1 X[value] %2 Y[value] %3 Z[value] %4 W[value] %5 U[value] %6 V[value] %7",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "X[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "Y[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "Z[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "W[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "U[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "V[value]",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_theta_movement_parameter",
    message0:
      "Set Theta Movement Parameter %1 F[value] %2 A[value] %3 J[value] %4 S[value] %5 E[value] %6",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "F[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "A[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "J[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "S[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "E[value]",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_axis_4_movement_parameter",
    message0:
      "Set Axis 4 Movement Parameter %1 F[value] %2 A[value] %3 J[value] %4 S[value] %5 E[value] %6",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "F[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "A[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "J[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "S[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "E[value]",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_axis_5_movement_parameter",
    message0:
      "Set Axis 5 Movement Parameter %1 F[value] %2 A[value] %3 J[value] %4 S[value] %5 E[value] %6",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "F[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "A[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "J[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "S[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "E[value]",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_axis_6_movement_parameter",
    message0:
      "Set Axis 6 Movement Parameter %1 F[value] %2 A[value] %3 J[value] %4 S[value] %5 E[value] %6",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "F[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "A[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "J[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "S[value]",
        check: "Number",
      },
      {
        type: "input_value",
        name: "E[value]",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "get_current_axis_parameter",
    message0: "Get Current Axis Parameter I[val] %1",
    args0: [
      {
        type: "field_dropdown",
        name: "I[val]",
        options: [
          ["get theta parameter", "0"],
          ["get axis 4 parameter", "1"],
          ["get axis 5 parameter", "2"],
          ["get axis 6 parameter", "3"],
        ],
      },
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "enable_emergency_stop_button",
    message0: "Enable Emergency Stop Button",
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "disenable_emergency_stop_button",
    message0: "Disable Emergency Stop Button",
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "select_end_effector",
    message0: "Select End Effector %1",
    args0: [
      {
        type: "field_dropdown",
        name: "E[value]",
        options: [
          ["Vacuum", "0"],
          ["Gripper", "1"],
          ["Pen", "2"],
          ["Laser", "3"],
          ["Printer", "4"],
          ["Custom", "5"],
        ],
      },
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "select_end_effector_331",
    message0: "Select End Effector %1",
    args0: [
      {
        type: "field_dropdown",
        name: "R[value]",
        options: [
          ["None (Disable port)", "0"],
          ["Conveyor", "1"],
          ["Sliding Rail", "2"],
        ],
      },
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_interpolated_line_length",
    message0: "Set Interpolated line length %1 P[len] %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "P[len]",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_arc_segment_length",
    message0: "Set Arc segment length %1 P[len] %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "P[len]",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_z_max_position",
    message0: "Set Z Max Position %1 Z[pos] %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "Z[pos]",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "save_setting",
    message0: "Save Settings",
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "restore_setting",
    message0: "Restore Settings",
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "reset_setting",
    message0: "Reset Settings",
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  //Conveyor
  {
    type: "detect_x_conveyor_com_port",
    message0: "Detect X Conveyor COM Port",
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_motion_mode",
    message0: "Set Motion Mode %1 value %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "value",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_speed_in_position_move",
    message0: "Set Speed In Position Move %1 value %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "value",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_position",
    message0: "Set Position %1 value %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "value",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_speed_in_serial_mode",
    message0: "Set Speed In Serial Mode %1 value %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "value",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  // Slider
  {
    type: "homing_slider",
    message0: "Homing",
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_moving_speed",
    message0: "Set Moving Speed %1 value %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "value",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_desired_position",
    message0: "Set Desired Position %1 value %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "value",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "disable_stepper_motor",
    message0: "Disable Stepper Motor %1 value %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "value",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_accleration",
    message0: "Set Acceleration %1 value %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "value",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  //XEcoder
  {
    type: "identity_x_encoder",
    message0: "Identity X Encoder",
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "select_response_mode",
    message0: "Select Response Mode %1 mode %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "field_dropdown",
        name: "mode",
        options: [
          ["Absolute Mode (default)", "0"],
          ["Relative Mode", "1"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "get_current_position_x_encoder",
    message0: "Get Current Position %1 T[period] %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "T[period]",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "set_pulse__mm_value",
    message0: "Set Pulse/MM value %1 S[value] %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "S[value]",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "read_proximity_sensor",
    message0: "Read Proximity Sensor %1 mode %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "field_dropdown",
        name: "mode",
        options: [
          ["get current sensor value", "V"],
          ["set auto feedback when the sensor value changed", "T"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: "",
    helpUrl: "",
  },
]);

// ROBOT

Blockly.JavaScript["linear_move"] = function (block: any) {
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

  return `G01 ${f} ${x} ${y} ${z} ${w}\n`;
};

Blockly.JavaScript["linear_movement"] = function (block: any) {
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
  let u = Blockly.JavaScript.valueToCode(
    block,
    "U[angle]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `U${Blockly.JavaScript.valueToCode(
        block,
        "U[angle]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let v = Blockly.JavaScript.valueToCode(
    block,
    "V[angle]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `V${Blockly.JavaScript.valueToCode(
        block,
        "V[angle]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let f = Blockly.JavaScript.valueToCode(
    block,
    "F[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `F${Blockly.JavaScript.valueToCode(
        block,
        "F[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let a = Blockly.JavaScript.valueToCode(
    block,
    "A[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `A${Blockly.JavaScript.valueToCode(
        block,
        "A[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let j = Blockly.JavaScript.valueToCode(
    block,
    "J[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `J${Blockly.JavaScript.valueToCode(
        block,
        "J[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let s = Blockly.JavaScript.valueToCode(
    block,
    "S[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `S${Blockly.JavaScript.valueToCode(
        block,
        "S[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let e = Blockly.JavaScript.valueToCode(
    block,
    "E[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `E${Blockly.JavaScript.valueToCode(
        block,
        "E[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `G01 ${x} ${y} ${z} ${w} ${u} ${v} ${f} ${a} ${j} ${s} ${e}\n`;
};

Blockly.JavaScript["arc_or_circle_move"] = function (block: any) {
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
  let i = Blockly.JavaScript.valueToCode(
    block,
    "I[offset]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `I${Blockly.JavaScript.valueToCode(
        block,
        "I[offset]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let j = Blockly.JavaScript.valueToCode(
    block,
    "J[offset]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `J${Blockly.JavaScript.valueToCode(
        block,
        "J[offset]",
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

  return `G02 ${f} ${i} ${j} ${x} ${y} ${w}\n`;
};

Blockly.JavaScript["controlled_arc_movement"] = function (block: any) {
  // %1 I[offset] %2 J[offset] %3 X[pos] %4 Y[pos] %5 Z[pos] %6 F[value] %7 A[value] %8 S[value] %9 E[value]
  let i = Blockly.JavaScript.valueToCode(
    block,
    "I[offset]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `I${Blockly.JavaScript.valueToCode(
        block,
        "I[offset]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let j = Blockly.JavaScript.valueToCode(
    block,
    "J[offset]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `J${Blockly.JavaScript.valueToCode(
        block,
        "J[offset]",
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
  let f = Blockly.JavaScript.valueToCode(
    block,
    "F[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `F${Blockly.JavaScript.valueToCode(
        block,
        "F[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let a = Blockly.JavaScript.valueToCode(
    block,
    "A[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `A${Blockly.JavaScript.valueToCode(
        block,
        "A[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let s = Blockly.JavaScript.valueToCode(
    block,
    "S[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `S${Blockly.JavaScript.valueToCode(
        block,
        "S[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let e = Blockly.JavaScript.valueToCode(
    block,
    "E[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `E${Blockly.JavaScript.valueToCode(
        block,
        "E[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `G02 ${i} ${j} ${x} ${y} ${f} ${a} ${s} ${e}\n`;
};

Blockly.JavaScript["dwell_delay"] = function (block: any) {
  // Search the text for a substring.
  let p = Blockly.JavaScript.valueToCode(
    block,
    "P[time]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `P${Blockly.JavaScript.valueToCode(
        block,
        "P[time]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `G04 ${p}\n`;
};

Blockly.JavaScript["bezier_cubic_spline"] = function (block: any) {
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
  let i = Blockly.JavaScript.valueToCode(
    block,
    "I[offset]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `I${Blockly.JavaScript.valueToCode(
        block,
        "I[offset]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let j = Blockly.JavaScript.valueToCode(
    block,
    "J[offset]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `J${Blockly.JavaScript.valueToCode(
        block,
        "J[offset]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let p = Blockly.JavaScript.valueToCode(
    block,
    "P[offset]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `P${Blockly.JavaScript.valueToCode(
        block,
        "P[offset]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let q = Blockly.JavaScript.valueToCode(
    block,
    "Q[offset]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `Q${Blockly.JavaScript.valueToCode(
        block,
        "Q[offset]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `G05 ${f} ${i} ${j} ${p} ${q} ${x} ${y}\n`;
};

Blockly.JavaScript["theta_angle_control"] = function (block: any) {
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
    "X[angle]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `X${Blockly.JavaScript.valueToCode(
        block,
        "X[angle]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let y = Blockly.JavaScript.valueToCode(
    block,
    "Y[angle]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `Y${Blockly.JavaScript.valueToCode(
        block,
        "Y[angle]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let z = Blockly.JavaScript.valueToCode(
    block,
    "Z[angle]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `Z${Blockly.JavaScript.valueToCode(
        block,
        "Z[angle]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let p = Blockly.JavaScript.valueToCode(
    block,
    "P[pos]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `P${Blockly.JavaScript.valueToCode(
        block,
        "P[pos]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `G06 ${f} ${x} ${y} ${z} ${p}\n`;
};

Blockly.JavaScript["homing"] = function (block: any) {
  return `G28\n`;
};

Blockly.JavaScript["absolute_movement_mode"] = function (block: any) {
  return `G90\n`;
};

Blockly.JavaScript["relative_movement_mode"] = function (block: any) {
  return `G91\n`;
};

Blockly.JavaScript["get_current_position"] = function (block: any) {
  return `G93\n`;
};

Blockly.JavaScript["turn_ouput_on___set_pwm"] = function (block: any) {
  let isLarger = block.getFieldValue("Lager Range") === "TRUE";
  let d = Blockly.JavaScript.valueToCode(
    block,
    "D[x]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `D${Blockly.JavaScript.valueToCode(
        block,
        "D[x]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let p = Blockly.JavaScript.valueToCode(
    block,
    "P[x]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `P${Blockly.JavaScript.valueToCode(
        block,
        "P[x]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let w = Blockly.JavaScript.valueToCode(
    block,
    "W[y]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `W${Blockly.JavaScript.valueToCode(
        block,
        "W[y]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return d ? `M03 ${d}\n` : !isLarger ? `M03 ${p} ${w}\n` : `M04 ${p} ${w}\n`;
};

Blockly.JavaScript["ouput_off___turn_off_pwm"] = function (block: any) {
  let d = Blockly.JavaScript.valueToCode(
    block,
    "D[x]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `D${Blockly.JavaScript.valueToCode(
        block,
        "D[x]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let p = Blockly.JavaScript.valueToCode(
    block,
    "P[x]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `P${Blockly.JavaScript.valueToCode(
        block,
        "P[x]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return d ? `M05 ${d}\n` : `M05 ${p}\n`;
};

Blockly.JavaScript["read_input_signals"] = function (block: any) {
  let i = block.getFieldValue("I[x]") ? `I${block.getFieldValue("I[x]")}` : "";
  let a = block.getFieldValue("A[x]") ? `A${block.getFieldValue("A[x]")}` : "";

  return `M07 ${i} ${a}\n`;
};

Blockly.JavaScript["read_input_signals_automatically"] = function (block: any) {
  let i = block.getFieldValue("I[x]") ? `I${block.getFieldValue("I[x]")}` : "";
  let b = block.getFieldValue("B[Y]") ? `B${block.getFieldValue("B[Y]")}` : "";
  let a = block.getFieldValue("A[x]") ? `A${block.getFieldValue("A[x]")}` : "";
  let c = Blockly.JavaScript.valueToCode(
    block,
    "C[y]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `C${Blockly.JavaScript.valueToCode(
        block,
        "C[y]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let p = block.getFieldValue("P[i]") ? `P${block.getFieldValue("P[i]")}` : "";

  return `M08 ${i} ${b} ${a} ${c} ${p}\n`;
};

Blockly.JavaScript["open_rs232_port"] = function (block: any) {
  let a = block.getFieldValue("A[x]") ? `A${block.getFieldValue("A[x]")}` : "";
  let b = Blockly.JavaScript.valueToCode(
    block,
    "B[y]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `B${Blockly.JavaScript.valueToCode(
        block,
        "B[y]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let p = block.getFieldValue("P[i]") ? `P${block.getFieldValue("P[i]")}` : "";

  return `M40 ${a} ${b}\n`;
};

Blockly.JavaScript["open_rs485_port"] = function (block: any) {
  let a = block.getFieldValue("A[x]") ? `A${block.getFieldValue("A[x]")}` : "";
  let b = Blockly.JavaScript.valueToCode(
    block,
    "B[y]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `B${Blockly.JavaScript.valueToCode(
        block,
        "B[y]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let p = block.getFieldValue("P[i]") ? `P${block.getFieldValue("P[i]")}` : "";

  return `M41 ${a} ${b}\n`;
};

Blockly.JavaScript["open_ttl_port"] = function (block: any) {
  let a = block.getFieldValue("A[x]") ? `A${block.getFieldValue("A[x]")}` : "";
  let b = Blockly.JavaScript.valueToCode(
    block,
    "B[y]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `B${Blockly.JavaScript.valueToCode(
        block,
        "B[y]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let p = block.getFieldValue("P[i]") ? `P${block.getFieldValue("P[i]")}` : "";

  return `M42 ${a} ${b}\n`;
};

Blockly.JavaScript["get_ports_config"] = function (block: any) {
  return `M49\n`;
};

Blockly.JavaScript["enable_rj45"] = function (block: any) {
  let a = block.getFieldValue("A[x]") ? `A${block.getFieldValue("A[x]")}` : "";
  return `M50 ${a}\n`;
};

Blockly.JavaScript["set_ethernet_port"] = function (block: any) {
  let b = Blockly.JavaScript.valueToCode(
    block,
    "B[x]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `B${Blockly.JavaScript.valueToCode(
        block,
        "B[x]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  return `M51 ${b}\n`;
};

Blockly.JavaScript["set_mac_device"] = function (block: any) {
  let a = Blockly.JavaScript.valueToCode(
    block,
    "A[x]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `A${Blockly.JavaScript.valueToCode(
        block,
        "A[x]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let b = Blockly.JavaScript.valueToCode(
    block,
    "B[y]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `B${Blockly.JavaScript.valueToCode(
        block,
        "B[y]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let c = Blockly.JavaScript.valueToCode(
    block,
    "C[z]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `C${Blockly.JavaScript.valueToCode(
        block,
        "C[z]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let d = Blockly.JavaScript.valueToCode(
    block,
    "D[t]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `D${Blockly.JavaScript.valueToCode(
        block,
        "D[t]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let e = Blockly.JavaScript.valueToCode(
    block,
    "E[u]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `E${Blockly.JavaScript.valueToCode(
        block,
        "E[u]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let f = Blockly.JavaScript.valueToCode(
    block,
    "F[v]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `F${Blockly.JavaScript.valueToCode(
        block,
        "F[v]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  return `M52 ${a} ${b} ${c} ${d} ${e} ${f}\n`;
};

Blockly.JavaScript["set_ethernet_ip"] = function (block: any) {
  let a = Blockly.JavaScript.valueToCode(
    block,
    "A[x]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `A${Blockly.JavaScript.valueToCode(
        block,
        "A[x]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let b = Blockly.JavaScript.valueToCode(
    block,
    "B[y]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `B${Blockly.JavaScript.valueToCode(
        block,
        "B[y]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let c = Blockly.JavaScript.valueToCode(
    block,
    "C[z]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `C${Blockly.JavaScript.valueToCode(
        block,
        "C[z]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let d = Blockly.JavaScript.valueToCode(
    block,
    "D[t]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `D${Blockly.JavaScript.valueToCode(
        block,
        "D[t]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  return `M53 ${a} ${b} ${c} ${d}\n`;
};

Blockly.JavaScript["set_ethernet_dns"] = function (block: any) {
  let a = Blockly.JavaScript.valueToCode(
    block,
    "A[x]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `A${Blockly.JavaScript.valueToCode(
        block,
        "A[x]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let b = Blockly.JavaScript.valueToCode(
    block,
    "B[y]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `B${Blockly.JavaScript.valueToCode(
        block,
        "B[y]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let c = Blockly.JavaScript.valueToCode(
    block,
    "C[z]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `C${Blockly.JavaScript.valueToCode(
        block,
        "C[z]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let d = Blockly.JavaScript.valueToCode(
    block,
    "D[t]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `D${Blockly.JavaScript.valueToCode(
        block,
        "D[t]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  return `M54 ${a} ${b} ${c} ${d}\n`;
};

Blockly.JavaScript["set_ethernet_gateway"] = function (block: any) {
  let a = Blockly.JavaScript.valueToCode(
    block,
    "A[x]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `A${Blockly.JavaScript.valueToCode(
        block,
        "A[x]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let b = Blockly.JavaScript.valueToCode(
    block,
    "B[y]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `B${Blockly.JavaScript.valueToCode(
        block,
        "B[y]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let c = Blockly.JavaScript.valueToCode(
    block,
    "C[z]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `C${Blockly.JavaScript.valueToCode(
        block,
        "C[z]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let d = Blockly.JavaScript.valueToCode(
    block,
    "D[t]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `D${Blockly.JavaScript.valueToCode(
        block,
        "D[t]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  return `M55 ${a} ${b} ${c} ${d}\n`;
};

Blockly.JavaScript["set_ethernet_subnet"] = function (block: any) {
  let a = Blockly.JavaScript.valueToCode(
    block,
    "A[x]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `A${Blockly.JavaScript.valueToCode(
        block,
        "A[x]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let b = Blockly.JavaScript.valueToCode(
    block,
    "B[y]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `B${Blockly.JavaScript.valueToCode(
        block,
        "B[y]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let c = Blockly.JavaScript.valueToCode(
    block,
    "C[z]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `C${Blockly.JavaScript.valueToCode(
        block,
        "C[z]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let d = Blockly.JavaScript.valueToCode(
    block,
    "D[t]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `D${Blockly.JavaScript.valueToCode(
        block,
        "D[t]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  return `M56 ${a} ${b} ${c} ${d}\n`;
};

Blockly.JavaScript["get_robot_ip"] = function (block: any) {
  return `M57 \n`;
};

Blockly.JavaScript["set_axis_4_parameters"] = function (block: any) {
  // Search the text for a substring.
  let d = Blockly.JavaScript.valueToCode(
    block,
    "D[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `D${Blockly.JavaScript.valueToCode(
        block,
        "D[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let e = Blockly.JavaScript.valueToCode(
    block,
    "E[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `E${Blockly.JavaScript.valueToCode(
        block,
        "E[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let i = Blockly.JavaScript.valueToCode(
    block,
    "I[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `I${Blockly.JavaScript.valueToCode(
        block,
        "I[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let s = Blockly.JavaScript.valueToCode(
    block,
    "S[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `S${Blockly.JavaScript.valueToCode(
        block,
        "S[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let r = Blockly.JavaScript.valueToCode(
    block,
    "R[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `R${Blockly.JavaScript.valueToCode(
        block,
        "R[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let u = Blockly.JavaScript.valueToCode(
    block,
    "U[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `U${Blockly.JavaScript.valueToCode(
        block,
        "U[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let p = Blockly.JavaScript.valueToCode(
    block,
    "P[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `P${Blockly.JavaScript.valueToCode(
        block,
        "P[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let q = Blockly.JavaScript.valueToCode(
    block,
    "Q[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `Q${Blockly.JavaScript.valueToCode(
        block,
        "Q[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let h = Blockly.JavaScript.valueToCode(
    block,
    "H[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `H${Blockly.JavaScript.valueToCode(
        block,
        "H[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let a = Blockly.JavaScript.valueToCode(
    block,
    "A[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `A${Blockly.JavaScript.valueToCode(
        block,
        "A[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let j = Blockly.JavaScript.valueToCode(
    block,
    "J[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `J${Blockly.JavaScript.valueToCode(
        block,
        "J[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let f = Blockly.JavaScript.valueToCode(
    block,
    "F[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `F${Blockly.JavaScript.valueToCode(
        block,
        "F[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `M60 ${d} ${e} ${i} ${s} ${r} ${u} ${p} ${q} ${h} ${a} ${j} ${f}\n`;
};

Blockly.JavaScript["set_axis_5_parameters"] = function (block: any) {
  // Search the text for a substring.
  let d = Blockly.JavaScript.valueToCode(
    block,
    "D[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `D${Blockly.JavaScript.valueToCode(
        block,
        "D[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let e = Blockly.JavaScript.valueToCode(
    block,
    "E[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `E${Blockly.JavaScript.valueToCode(
        block,
        "E[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let i = Blockly.JavaScript.valueToCode(
    block,
    "I[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `I${Blockly.JavaScript.valueToCode(
        block,
        "I[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let s = Blockly.JavaScript.valueToCode(
    block,
    "S[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `S${Blockly.JavaScript.valueToCode(
        block,
        "S[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let r = Blockly.JavaScript.valueToCode(
    block,
    "R[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `R${Blockly.JavaScript.valueToCode(
        block,
        "R[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let u = Blockly.JavaScript.valueToCode(
    block,
    "U[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `U${Blockly.JavaScript.valueToCode(
        block,
        "U[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let p = Blockly.JavaScript.valueToCode(
    block,
    "P[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `P${Blockly.JavaScript.valueToCode(
        block,
        "P[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let q = Blockly.JavaScript.valueToCode(
    block,
    "Q[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `Q${Blockly.JavaScript.valueToCode(
        block,
        "Q[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let h = Blockly.JavaScript.valueToCode(
    block,
    "H[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `H${Blockly.JavaScript.valueToCode(
        block,
        "H[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let a = Blockly.JavaScript.valueToCode(
    block,
    "A[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `A${Blockly.JavaScript.valueToCode(
        block,
        "A[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let j = Blockly.JavaScript.valueToCode(
    block,
    "J[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `J${Blockly.JavaScript.valueToCode(
        block,
        "J[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let f = Blockly.JavaScript.valueToCode(
    block,
    "F[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `F${Blockly.JavaScript.valueToCode(
        block,
        "F[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `M61 ${d} ${e} ${i} ${s} ${r} ${u} ${p} ${q} ${h} ${a} ${j} ${f}\n`;
};

Blockly.JavaScript["set_axis_6_parameters"] = function (block: any) {
  // Search the text for a substring.
  let d = Blockly.JavaScript.valueToCode(
    block,
    "D[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `D${Blockly.JavaScript.valueToCode(
        block,
        "D[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let e = Blockly.JavaScript.valueToCode(
    block,
    "E[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `E${Blockly.JavaScript.valueToCode(
        block,
        "E[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let i = Blockly.JavaScript.valueToCode(
    block,
    "I[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `I${Blockly.JavaScript.valueToCode(
        block,
        "I[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let s = Blockly.JavaScript.valueToCode(
    block,
    "S[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `S${Blockly.JavaScript.valueToCode(
        block,
        "S[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let r = Blockly.JavaScript.valueToCode(
    block,
    "R[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `R${Blockly.JavaScript.valueToCode(
        block,
        "R[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let u = Blockly.JavaScript.valueToCode(
    block,
    "U[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `U${Blockly.JavaScript.valueToCode(
        block,
        "U[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let p = Blockly.JavaScript.valueToCode(
    block,
    "P[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `P${Blockly.JavaScript.valueToCode(
        block,
        "P[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let q = Blockly.JavaScript.valueToCode(
    block,
    "Q[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `Q${Blockly.JavaScript.valueToCode(
        block,
        "Q[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let h = Blockly.JavaScript.valueToCode(
    block,
    "H[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `H${Blockly.JavaScript.valueToCode(
        block,
        "H[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let a = Blockly.JavaScript.valueToCode(
    block,
    "A[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `A${Blockly.JavaScript.valueToCode(
        block,
        "A[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let j = Blockly.JavaScript.valueToCode(
    block,
    "J[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `J${Blockly.JavaScript.valueToCode(
        block,
        "J[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let f = Blockly.JavaScript.valueToCode(
    block,
    "F[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `F${Blockly.JavaScript.valueToCode(
        block,
        "F[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `M62 ${d} ${e} ${i} ${s} ${r} ${u} ${p} ${q} ${h} ${a} ${j} ${f}\n`;
};

Blockly.JavaScript["disable_steppers"] = function (block: any) {
  return `M84\n`;
};

Blockly.JavaScript["output_on_laser_on_vaccum_on_gripper_close"] = function (
  block: any
) {
  let s = Blockly.JavaScript.valueToCode(
    block,
    "S[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `S${Blockly.JavaScript.valueToCode(
        block,
        "S[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `M03 ${s}\n`;
};

Blockly.JavaScript["output_off_laser_off_vaccum_off_gripper_open"] = function (
  block: any
) {
  return `M05\n`;
};

Blockly.JavaScript["disable_steppers"] = function (block: any) {
  return `M84\n`;
};

Blockly.JavaScript["set_auto_feedback_position"] = function (block: any) {
  let a = block.getFieldValue("A[x]") ? `A${block.getFieldValue("A[x]")}` : "";
  let b = Blockly.JavaScript.valueToCode(
    block,
    "B[time]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `B${Blockly.JavaScript.valueToCode(
        block,
        "B[time]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let c = block.getFieldValue("C[port]")
    ? `C${block.getFieldValue("C[port]")}`
    : "";

  return `M100 ${a} ${b} ${c}\n`;
};

Blockly.JavaScript["set_jerk"] = function (block: any) {
  let j = Blockly.JavaScript.valueToCode(
    block,
    "J[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `J${Blockly.JavaScript.valueToCode(
        block,
        "J[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `M203 ${j}\n`;
};

Blockly.JavaScript["set_max_acceleration"] = function (block: any) {
  let a = Blockly.JavaScript.valueToCode(
    block,
    "A[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `A${Blockly.JavaScript.valueToCode(
        block,
        "A[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `M204 ${a}\n`;
};

Blockly.JavaScript["set_theta_movement_parameter"] = function (block: any) {
  let f = Blockly.JavaScript.valueToCode(
    block,
    "F[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `F${Blockly.JavaScript.valueToCode(
        block,
        "F[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  let a = Blockly.JavaScript.valueToCode(
    block,
    "A[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `A${Blockly.JavaScript.valueToCode(
        block,
        "A[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  let j = Blockly.JavaScript.valueToCode(
    block,
    "J[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `J${Blockly.JavaScript.valueToCode(
        block,
        "J[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  let s = Blockly.JavaScript.valueToCode(
    block,
    "S[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `S${Blockly.JavaScript.valueToCode(
        block,
        "S[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  let e = Blockly.JavaScript.valueToCode(
    block,
    "E[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `E${Blockly.JavaScript.valueToCode(
        block,
        "E[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  return `M210 ${f} ${a} ${j} ${s} ${e}\n`;
};

Blockly.JavaScript["set_axis_4_movement_parameter"] = function (block: any) {
  let f = Blockly.JavaScript.valueToCode(
    block,
    "F[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `F${Blockly.JavaScript.valueToCode(
        block,
        "F[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  let a = Blockly.JavaScript.valueToCode(
    block,
    "A[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `A${Blockly.JavaScript.valueToCode(
        block,
        "A[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  let j = Blockly.JavaScript.valueToCode(
    block,
    "J[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `J${Blockly.JavaScript.valueToCode(
        block,
        "J[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  let s = Blockly.JavaScript.valueToCode(
    block,
    "S[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `S${Blockly.JavaScript.valueToCode(
        block,
        "S[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  let e = Blockly.JavaScript.valueToCode(
    block,
    "E[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `E${Blockly.JavaScript.valueToCode(
        block,
        "E[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  return `M211 ${f} ${a} ${j} ${s} ${e}\n`;
};

Blockly.JavaScript["set_axis_5_movement_parameter"] = function (block: any) {
  let f = Blockly.JavaScript.valueToCode(
    block,
    "F[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `F${Blockly.JavaScript.valueToCode(
        block,
        "F[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  let a = Blockly.JavaScript.valueToCode(
    block,
    "A[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `A${Blockly.JavaScript.valueToCode(
        block,
        "A[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  let j = Blockly.JavaScript.valueToCode(
    block,
    "J[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `J${Blockly.JavaScript.valueToCode(
        block,
        "J[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  let s = Blockly.JavaScript.valueToCode(
    block,
    "S[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `S${Blockly.JavaScript.valueToCode(
        block,
        "S[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  let e = Blockly.JavaScript.valueToCode(
    block,
    "E[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `E${Blockly.JavaScript.valueToCode(
        block,
        "E[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  return `M212 ${f} ${a} ${j} ${s} ${e}\n`;
};

Blockly.JavaScript["set_axis_6_movement_parameter"] = function (block: any) {
  let f = Blockly.JavaScript.valueToCode(
    block,
    "F[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `F${Blockly.JavaScript.valueToCode(
        block,
        "F[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  let a = Blockly.JavaScript.valueToCode(
    block,
    "A[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `A${Blockly.JavaScript.valueToCode(
        block,
        "A[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  let j = Blockly.JavaScript.valueToCode(
    block,
    "J[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `J${Blockly.JavaScript.valueToCode(
        block,
        "J[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  let s = Blockly.JavaScript.valueToCode(
    block,
    "S[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `S${Blockly.JavaScript.valueToCode(
        block,
        "S[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  let e = Blockly.JavaScript.valueToCode(
    block,
    "E[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `E${Blockly.JavaScript.valueToCode(
        block,
        "E[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  return `M213 ${f} ${a} ${j} ${s} ${e}\n`;
};

Blockly.JavaScript["get_current_axis_parameter"] = function (block: any) {
  let i = block.getFieldValue("I[val]")
    ? `I${block.getFieldValue("I[val]")}`
    : "";

  return `M220 ${i}\n`;
};

Blockly.JavaScript["enable_emergency_stop_button"] = function (block: any) {
  return `M600 A8 B9\n`;
};

Blockly.JavaScript["disenable_emergency_stop_button"] = function (block: any) {
  return `M601\n`;
};

Blockly.JavaScript["set_hotend_temperature"] = function (block: any) {
  let s = Blockly.JavaScript.valueToCode(
    block,
    "S[temp]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `S${Blockly.JavaScript.valueToCode(
        block,
        "S[temp]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `M104 ${s}\n`;
};

Blockly.JavaScript["report_temperature"] = function (block: any) {
  return `M105\n`;
};

Blockly.JavaScript["wait_for_hotend_temperature"] = function (block: any) {
  let s = Blockly.JavaScript.valueToCode(
    block,
    "S[temp]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `S${Blockly.JavaScript.valueToCode(
        block,
        "S[temp]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `M109 ${s}\n`;
};

Blockly.JavaScript["set_max_feedrate_s"] = function (block: any) {
  let s = Blockly.JavaScript.valueToCode(
    block,
    "S[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `S${Blockly.JavaScript.valueToCode(
        block,
        "S[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `M203 ${s}\n`;
};

Blockly.JavaScript["set_max_feedrate_a"] = function (block: any) {
  let a = Blockly.JavaScript.valueToCode(
    block,
    "A[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `A${Blockly.JavaScript.valueToCode(
        block,
        "A[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `M204 ${a}\n`;
};

Blockly.JavaScript["set_begin_end_velocity"] = function (block: any) {
  let s = Blockly.JavaScript.valueToCode(
    block,
    "S[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `S${Blockly.JavaScript.valueToCode(
        block,
        "S[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `M205 ${s}\n`;
};

Blockly.JavaScript["set_z_offset"] = function (block: any) {
  let z = Blockly.JavaScript.valueToCode(
    block,
    "Z[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `Z${Blockly.JavaScript.valueToCode(
        block,
        "Z[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `M206 ${z}\n`;
};

Blockly.JavaScript["set_axis_offset"] = function (block: any) {
  let x = Blockly.JavaScript.valueToCode(
    block,
    "X[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `X${Blockly.JavaScript.valueToCode(
        block,
        "X[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let y = Blockly.JavaScript.valueToCode(
    block,
    "Y[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `Y${Blockly.JavaScript.valueToCode(
        block,
        "Y[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let z = Blockly.JavaScript.valueToCode(
    block,
    "Z[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `Z${Blockly.JavaScript.valueToCode(
        block,
        "Z[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let w = Blockly.JavaScript.valueToCode(
    block,
    "W[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `W${Blockly.JavaScript.valueToCode(
        block,
        "W[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let u = Blockly.JavaScript.valueToCode(
    block,
    "U[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `U${Blockly.JavaScript.valueToCode(
        block,
        "U[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  let v = Blockly.JavaScript.valueToCode(
    block,
    "V[value]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `V${Blockly.JavaScript.valueToCode(
        block,
        "V[value]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";
  return `M206 ${x} ${y} ${z} ${w} ${u} ${v}\n`;
};

Blockly.JavaScript["select_end_effector"] = function (block: any) {
  let e = block.getFieldValue("E[value]")
    ? `E${block.getFieldValue("E[value]")}`
    : "";

  return `M360 ${e}\n`;
};

Blockly.JavaScript["select_end_effector_331"] = function (block: any) {
  let r = block.getFieldValue("R[value]")
    ? `R${block.getFieldValue("R[value]")}`
    : "";

  return `M331 ${r}\n`;
};

Blockly.JavaScript["set_interpolated_line_length"] = function (block: any) {
  let p = Blockly.JavaScript.valueToCode(
    block,
    "P[len]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `P${Blockly.JavaScript.valueToCode(
        block,
        "P[len]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `M361 ${p}\n`;
};

Blockly.JavaScript["set_arc_segment_length"] = function (block: any) {
  let p = Blockly.JavaScript.valueToCode(
    block,
    "P[len]",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `P${Blockly.JavaScript.valueToCode(
        block,
        "P[len]",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `M362 ${p}\n`;
};

Blockly.JavaScript["set_z_max_position"] = function (block: any) {
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

  return `M402 ${z}\n`;
};

Blockly.JavaScript["save_setting"] = function (block: any) {
  return `M500`;
};

Blockly.JavaScript["restore_setting"] = function (block: any) {
  return `M501`;
};

Blockly.JavaScript["reset_setting"] = function (block: any) {
  return `M502`;
};

// Conveyor

Blockly.JavaScript["detect_x_conveyor_com_port"] = function (block: any) {
  return `IsXConveyor`;
};

Blockly.JavaScript["set_motion_mode"] = function (block: any) {
  let value = Blockly.JavaScript.valueToCode(
    block,
    "value",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `${Blockly.JavaScript.valueToCode(
        block,
        "value",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `M310 ${value}\n`;
};

Blockly.JavaScript["set_speed_in_serial_mode"] = function (block: any) {
  let value = Blockly.JavaScript.valueToCode(
    block,
    "value",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `${Blockly.JavaScript.valueToCode(
        block,
        "value",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `M311 ${value}\n`;
};

Blockly.JavaScript["set_position"] = function (block: any) {
  let value = Blockly.JavaScript.valueToCode(
    block,
    "value",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `${Blockly.JavaScript.valueToCode(
        block,
        "value",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `M312 ${value}\n`;
};

Blockly.JavaScript["set_speed_in_position_move"] = function (block: any) {
  let value = Blockly.JavaScript.valueToCode(
    block,
    "value",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `${Blockly.JavaScript.valueToCode(
        block,
        "value",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `M313 ${value}\n`;
};

//Slider

Blockly.JavaScript["homing_slider"] = function (block: any) {
  return `M320`;
};

Blockly.JavaScript["set_moving_speed"] = function (block: any) {
  let value = Blockly.JavaScript.valueToCode(
    block,
    "value",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `${Blockly.JavaScript.valueToCode(
        block,
        "value",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `M321 ${value}\n`;
};

Blockly.JavaScript["set_desired_position"] = function (block: any) {
  let value = Blockly.JavaScript.valueToCode(
    block,
    "value",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `${Blockly.JavaScript.valueToCode(
        block,
        "value",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `M322 ${value}\n`;
};

Blockly.JavaScript["disable_stepper_motor"] = function (block: any) {
  return `M323\n`;
};

Blockly.JavaScript["set_acceleration"] = function (block: any) {
  let value = Blockly.JavaScript.valueToCode(
    block,
    "value",
    Blockly.JavaScript.ORDER_ATOMIC
  )
    ? `${Blockly.JavaScript.valueToCode(
        block,
        "value",
        Blockly.JavaScript.ORDER_ATOMIC
      )}`
    : "";

  return `M324 ${value}\n`;
};

//XEcoder
Blockly.JavaScript["identity_x_encoder"] = function (block: any) {
  return `IsXEncoder`;
};

Blockly.JavaScript["select_response_mode"] = function (block: any) {
  let mode = block.getFieldValue("mode")
    ? `A${block.getFieldValue("mode")}`
    : "";

  return `M316 ${mode}\n`;
};

Blockly.JavaScript["get_current_position"] = function (block: any) {
  let t = block.getFieldValue("mode") ? `T${block.getFieldValue("mode")}` : "";

  return `M317 ${t}\n`;
};

Blockly.JavaScript["set_pulse__mm_value"] = function (block: any) {
  let s = block.getFieldValue("S[value]")
    ? `S${block.getFieldValue("S[value]")}`
    : "";

  return `M318 ${s}\n`;
};

Blockly.JavaScript["read_proximity_sensor"] = function (block: any) {
  let mode = block.getFieldValue("mode")
    ? `T${block.getFieldValue("mode")}`
    : "";

  return `M319 ${mode}\n`;
};
export default Blockly;
