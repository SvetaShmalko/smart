class Mode implements IMode {
    private modes: string[]
    private current: number = 0
    public constructor(modes: string[]) {
        this.modes = modes;
    }
    public getModes() {
        return this.modes;
    }

    public getCurrent() {
        return this.modes[this.current];
    }

    public next() {
        if (this.current < this.modes.length - 1) {
            this.current++;
        } else {
            this.current = 0;
        }
    }

    public previous() {
        if (this.current > 0) {
            this.current--;
        } else {
            this.current = this.modes.length - 1;
        }
    }
}

