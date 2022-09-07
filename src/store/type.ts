import { Crop } from "react-image-crop";
import { Socket } from "socket.io-client";

export type Action = ReducerAction<Event, Payload>;

export type InitialStateType = {
  module: number;
  dashboard: DashboardType;
  socket: Socket;
};

export type ReducerAction<T, P> = {
  type: T;
  payload: P;
};

export interface Payload extends DashboardPayload {}

export type Event = DashboardEvent | SocketEvent;

export enum DashboardEvent {
  SET_SCREEN = "SET_SCREEN",
  SET_DEVICE_ROBOT_MENU = "SET_DEVICE_ROBOT_MENU",
  SET_DEVICE_ROBOT_JOGGING_STEP = "SET_DEVICE_ROBOT_JOGGING_STEP",
  SET_DEVICE_ROBOT_JOGGING_SPEED = "SET_DEVICE_ROBOT_JOGGING_SPEED",
  ADD_MORE_DEVICE = "ADD_MORE_DEVICE",
  SET_PLUGIN_OBJECT_DETECTING_VIEWER_TOOL = "SET_PLUGIN_OBJECT_DETECTING_VIEWER_TOOL",
  SET_PLUGIN_OBJECT_DETECTING_VIEWER_CROP_VALUE = "SET_PLUGIN_OBJECT_DETECTING_VIEWER_CROP_VALUE",
  SET_PLUGIN_OBJECT_DETECTING_VIEWER_IS_APPLY_CROP = "SET_PLUGIN_OBJECT_DETECTING_VIEWER_IS_APPLY_CROP",
}

export enum SocketEvent {
  MOVE = "MOVE",
}

export enum Direction {
  FORWARD,
  BACKWARD,
  LEFT,
  RIGHT,
  UP,
  DOWN,
}
export interface SocketPayload {
  jogging: {
    direction: Direction;
    step: number;
  };
}

export interface PluginType {
  screen: number | null;
  objectDetecting: {
    screen: number | null;
    viewer: {
      configuration: number | null;
      tool: number | null;
      crop: { crop: Crop | null; isApplyCrop: boolean };
    };
  };
}

export interface RobotType {
  screen: number | null;
  jogging: {
    speed: number;
    step: number;
    axis: { name: string; value: number }[];
    xyz: { name: string; value: number }[];
  };
  name: string;
}
export interface DeviceComponentType extends RobotType {
  type: "ROBOT" | "CONVEYOR" | "ENCODER";
}

export interface DeviceType {
  screen: number | null;
  component: DeviceComponentType[];
}
export interface DashboardType {
  plugin: PluginType;
  device: DeviceType;
  type: "full-screen" | "horizontal-split" | "vertical-split";
}

export interface DashboardPayload {
  plugin?: PluginType;
  device?: DeviceType;
  type?: "full-screen" | "horizontal-split" | "vertical-split";
}
