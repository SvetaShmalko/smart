"use strict";
class ADevice {
    constructor(name) {
        this.name = name;
        this.state = false;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getState() {
        return this.state;
    }
    on() {
        this.state = true;
    }
    off() {
        this.state = false;
    }
}
