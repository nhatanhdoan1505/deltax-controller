import { Dispatch } from "react";
import { Crop } from "react-image-crop";
import { Action, DashboardEvent, InitialStateType } from "store";

interface IPayload {
  screen?: number;
  tool?: number;
  crop?: Crop;
  isApplyCrop?: boolean;
  optionScreen?:
    | "close"
    | "full-screen"
    | "horizontal-split"
    | "vertical-split";
  step?: string;
}

export function appDispatch({
  type,
  payload,
  metaData,
  state,
  dispatch,
}: {
  state: InitialStateType;
  dispatch: Dispatch<Action>;
  type: DashboardEvent;
  payload: IPayload;
  metaData?: "PLUGIN" | "DEVICE";
}) {
  const { dashboard } = state;
  switch (type) {
    case DashboardEvent.SET_SCREEN:
      if (["PLUGIN", "DEVICE"].includes(metaData!) && !payload.optionScreen) {
        dispatch({
          type: DashboardEvent.SET_SCREEN,
          payload: {
            plugin:
              metaData === "PLUGIN"
                ? { ...state.dashboard.plugin, screen: payload.screen! }
                : { ...state.dashboard.plugin },
            device:
              metaData === "DEVICE"
                ? { ...state.dashboard.device, screen: payload.screen! }
                : { ...state.dashboard.device },
            type: state.dashboard.type,
          },
        });
        break;
      }
      if (
        ["close", "full-screen", "horizontal-split", "vertical-split"].includes(
          payload.optionScreen!
        )
      )
        dispatch({
          type: DashboardEvent.SET_SCREEN,
          payload: {
            plugin:
              (payload.optionScreen === "close" && metaData === "PLUGIN") ||
              (payload.optionScreen === "full-screen" && metaData === "DEVICE")
                ? { ...state.dashboard.plugin, screen: null }
                : { ...state.dashboard.plugin },
            device:
              (payload.optionScreen === "close" && metaData === "DEVICE") ||
              (payload.optionScreen === "full-screen" && metaData === "PLUGIN")
                ? { ...state.dashboard.device, screen: null }
                : { ...state.dashboard.device },
            type:
              payload.optionScreen !== "close"
                ? payload.optionScreen
                : "full-screen",
          },
        });
      break;
    case DashboardEvent.SET_DEVICE_ROBOT_MENU:
      dispatch({
        type: DashboardEvent.SET_DEVICE_ROBOT_MENU,
        payload: {
          device: {
            ...dashboard.device,
            robot: { ...dashboard.device.robot, screen: payload.screen! },
          },
        },
      });
      break;
    case DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_VIEWER_TOOL:
      dispatch({
        type: DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_VIEWER_TOOL,
        payload: {
          plugin: {
            ...dashboard.plugin,
            objectDetecting: {
              ...dashboard.plugin.objectDetecting,
              viewer: {
                ...dashboard.plugin.objectDetecting.viewer,
                tool: payload.tool!,
              },
            },
          },
        },
      });
      break;
    case DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_VIEWER_CROP_VALUE:
      dispatch({
        type: DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_VIEWER_CROP_VALUE,
        payload: {
          plugin: {
            ...dashboard.plugin,
            objectDetecting: {
              ...dashboard.plugin.objectDetecting,
              viewer: {
                ...dashboard.plugin.objectDetecting.viewer,
                crop: {
                  ...dashboard.plugin.objectDetecting.viewer.crop,
                  crop: payload.crop!,
                },
              },
            },
          },
        },
      });
      break;
    case DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_VIEWER_IS_APPLY_CROP:
      dispatch({
        type: DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_VIEWER_IS_APPLY_CROP,
        payload: {
          plugin: {
            ...dashboard.plugin,
            objectDetecting: {
              ...dashboard.plugin.objectDetecting,
              viewer: {
                ...dashboard.plugin.objectDetecting.viewer,
                crop: {
                  ...dashboard.plugin.objectDetecting.viewer.crop,
                  isApplyCrop: payload.isApplyCrop!,
                },
              },
            },
          },
        },
      });
      break;
    case DashboardEvent.SET_DEVICE_ROBOT_JOGGING_STEP:
      dispatch({
        type: DashboardEvent.SET_DEVICE_ROBOT_JOGGING_STEP,
        payload: {
          device: {
            ...dashboard.device,
            robot: {
              ...dashboard.device.robot,
              jogging: {
                ...dashboard.device.robot.jogging,
                step: +payload.step!,
              },
            },
          },
        },
      });
      break;

    default:
      break;
  }
}
