export interface IMainPageTemplateProps {
  plugin: IPlugin[];
  device: IDevice[];
}

export interface IPlugin {
  name: string;
  icon: JSX.Element;
  iconActive: JSX.Element;
}

export interface IDevice {
  name: string;
  icon: JSX.Element;
  iconActive: JSX.Element;
}
