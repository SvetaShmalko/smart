class SmartHouse {
    constructor(name) {
        this.name = name;
        this.devices = [];
    }
    getName() {
        return this.name;
    }
    addDevice(device) {
        this.devices.push(device);
    }
    getDevices() {
        return this.devices;
    }
    getDeviceByName(name) {
        return this.devices.find((device) => device.getName() === name);
    }
    deleteDeviceByName(name) {
        let element = this.getDeviceByName(name);
        if (typeof element != "undefined") {
            this.devices.splice(this.devices.indexOf(element), 1);
        }
        else {
            console.log("nothing to delete");
        }
    }
    offAllDevice() {
        this.devices.forEach((device) => device.off());
    }
    async delayOn(name, delay) {
        await new Promise((resolve) => {
            setTimeout(() => {
                this.getDeviceByName(name).on();
                resolve();
            }, delay);
        });
    }
    async delayOff(name, delay) {
        await new Promise((resolve) => {
            setTimeout(() => {
                this.getDeviceByName(name).off();
                resolve();
            }, delay);
        });
    }
}
