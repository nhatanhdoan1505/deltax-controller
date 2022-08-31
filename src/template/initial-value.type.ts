import { IAxisSlider, IEndEffector, IInput, IOutput, IStep, XYZButton } from "type";

export interface IRobotJogging {
  xyz: XYZButton[];
  step: IStep[];
  axis: IAxisSlider[];
}

export interface IIo {
  endEffector: IEndEffector;
  output: IOutput;
  input: IInput[];
}
