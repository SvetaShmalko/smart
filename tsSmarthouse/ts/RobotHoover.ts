class RobotHoover extends ADevice{
    private modes: IMode;
    private waterTank: boolean = false;
    constructor(name: string, modes: IMode) {
        super(name);
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