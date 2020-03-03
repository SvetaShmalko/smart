"use strict";
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
        // return this.devices.find((device)=>device.name == name);
        return this.devices.filter((device) => device.name == name);
    }
    deleteDeviceByName(name) {
        let device1 = this.getDeviceByName(name);
        //  let ind = this.devices.indexOf(device);  
        console.log(device1);
        //	this.devices.splice(ind, 1); 
    }
    offAllDevice() {
        this.devices.forEach((device) => device.off());
    }
}
