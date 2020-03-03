class Mode implements IMode {
    private modes: string[];
    private current: number = 0;
    constructor(modes: string[]) {
        this.modes = modes;
    }
    getModes() {
        return this.modes;
    }
    getCurrent() {
        return this.modes[this.current];
    }
    next() {
        if (this.current < this.modes.length - 1) {
            this.current++;
        }
        else {
            this.current = 0;
        }
    }
    previous() {
        if (this.current > 0) {
            this.current--;
        }
        else {
            this.current = this.modes.length - 1;
        }
    }
}

