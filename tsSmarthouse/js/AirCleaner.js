"use strict";
class AirCleaner extends ADevice {
    constructor(name, modes) {
        super(name);
        this.power = 1;
        this.state = false;
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
