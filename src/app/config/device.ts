import * as Device from "expo-device";

export const getDeviceId = (): string => {
  return Device.osInternalBuildId;
};
