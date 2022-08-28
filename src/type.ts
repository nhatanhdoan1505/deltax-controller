import { ThemeTypings } from "@chakra-ui/react";

export interface IMainPageTemplateProps {
  plugins: IPlugin[];
  devices: IDevice[];
}

export interface IPlugin {
  name: string;
  icon: JSX.Element;
  iconActive: JSX.Element;
  index: number;
  type: "PLUGIN";
}

export interface IDevice {
  name: string;
  icon: JSX.Element;
  iconActive: JSX.Element;
  index: number;
  type: "DEVICE";
}

export interface IScreenOption {
  icon: JSX.Element;
  color: string;
  type: "close" | "full-screen" | "horizontal-split" | "vertical-split";
  screen: "PLUGIN" | "DEVICE";
}

export interface IJoggingButton {
  name: string | JSX.Element;
  type: string;
  color: ThemeTypings["colorSchemes"];
}

export interface IMenuButton {
  name: string | JSX.Element;
  index: number;
  rootIndex?: number;
  onClick?: () => void;
  color: ThemeTypings["colorSchemes"];
}

export interface XYZButton {
  value: number;
  name: string;
}

export interface IAxisSlider {
  name: string;
  value: number;
  color: ThemeTypings["colorSchemes"];
}

export interface IStep extends IJoggingButton {}

export interface IJoggingProps {
  xyz: XYZButton[];
  step: IStep[];
  axis: IAxisSlider[];
}
