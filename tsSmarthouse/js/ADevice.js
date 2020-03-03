"use strict";
class ADevice {
    constructor(name) {
        this.name = name;
    }
    on() {
        return this.state = true;
    }
    off() {
        return this.state = false;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getState() {
        return this.state;
    }
}
