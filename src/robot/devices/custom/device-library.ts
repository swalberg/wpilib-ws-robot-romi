import CustomDevice, { RobotHardwareInterfaces } from "./custom-device";
import ExampleCustomDevice from "./example-custom-device";
import RevColorSensorV3 from "./rev-color-sensor-v3";
import VL53L0X from "./vl53l0x";

export interface CustomDeviceConstructor {
    new (robotHardware: RobotHardwareInterfaces, config: any): CustomDevice;
}

const CUSTOM_DEVICE_LIST: Map<string, CustomDeviceConstructor> = new Map<string, CustomDeviceConstructor>();

// Add new devices to the map
CUSTOM_DEVICE_LIST.set("example-custom-device", ExampleCustomDevice);
CUSTOM_DEVICE_LIST.set("rev-color-sensor", RevColorSensorV3);
CUSTOM_DEVICE_LIST.set("vl53l0x", VL53L0X);

export default class CustomDeviceFactory {
    public static createDevice(type: string, robotHardware: RobotHardwareInterfaces, config: any): CustomDevice {
        const ctor = CUSTOM_DEVICE_LIST.get(type);

        if (!ctor) {
            throw new Error(`Invalid Custom Device Type (${type})`);
        }

        return new ctor(robotHardware, config);
    }
}
