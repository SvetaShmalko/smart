class AirCleaner extends ADevice {
    private modes: IMode
    private power: number = 1
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
    public getPower() {
        return this.power
    }
    public incresePower() {
        if (this.power < 5) {
            this.power++;
        }
    }
    public decreasePower() {
        if (this.power > 1) {
            this.power--;
        }
    }
}
