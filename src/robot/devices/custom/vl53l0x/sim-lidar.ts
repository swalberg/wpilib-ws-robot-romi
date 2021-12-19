import { SimDevice, FieldDirection } from "@wpilib/wpilib-ws-robot";

export default class SimLidar extends SimDevice {
    constructor(portIdx: number, chIdx: number) {
        super("vl53l0x tof sensor", portIdx, chIdx);

        this.registerField("Proximity", FieldDirection.INPUT_TO_ROBOT_CODE, 0.0);
    }

    public set proximity(value: number) {
        this.setValue("Proximity", value);
    }

    public get proximity(): number {
        return this.getValue("Proximity");
    }
}
