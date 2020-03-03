class AirCleaner extends ADevice {
    protected modes: IMode;
    protected power: number = 1;
    public state: boolean = false;
    constructor(name: string, modes: IMode) {
        super(name);
        this.modes = modes;
    }
    getPower() {
        return this.power;
    }
    incresePower() {
        if (this.power < 5) {
            this.power++;
        }
    }
    decreasePower() {
        if (this.power > 1) {
            this.power--;
        }
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
}
