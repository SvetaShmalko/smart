class RobotHoover extends ADevice{
    private modes: IMode
    private waterTank: boolean = false
    public constructor(name: string, modes: IMode) {
        super(name)
        this.modes = modes
    }

    public getModes() {
        return this.modes.getModes()
    }

    public getCurrent() {
        return this.modes.getCurrent()
    }

    public nextMode() {
        this.modes.next()
    }

    public previousMode() {
        this.modes.previous()
    }

    public setWater() {
		this.waterTank = true
	}

	public waterOut() {
		this.waterTank = false
	}
}