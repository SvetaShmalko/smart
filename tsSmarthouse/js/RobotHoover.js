class RobotHoover extends ADevice {
    constructor(name, modes) {
        super(name);
        this.waterTank = false;
        this.modes = modes;
    }
    getModes() {
        return this.modes.getModes();
    }
    getCurrent() {
        return this.modes.getCurrent();
    }
    nextMode() {
        this.modes.next();
    }
    previousMode() {
        this.modes.previous();
    }
    setWater() {
        this.waterTank = true;
    }
    waterOut() {
        this.waterTank = false;
    }
}
