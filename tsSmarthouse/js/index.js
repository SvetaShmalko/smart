"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ADevice = /** @class */ (function () {
    function ADevice(name) {
        this.name = name;
    }
    ADevice.prototype.on = function () {
        return this.state = true;
    };
    ADevice.prototype.off = function () {
        return this.state = false;
    };
    ADevice.prototype.setName = function (name) {
        this.name = name;
    };
    ADevice.prototype.getName = function () {
        return this.name;
    };
    ADevice.prototype.getState = function () {
        return this.state;
    };
    return ADevice;
}());
var Mode = /** @class */ (function () {
    function Mode(modes) {
        this.current = 0;
        this.modes = modes;
    }
    Mode.prototype.getModes = function () {
        return this.modes;
    };
    Mode.prototype.getCurrent = function () {
        return this.modes[this.current];
    };
    Mode.prototype.next = function () {
        if (this.current < this.modes.length - 1) {
            this.current++;
        }
        else {
            this.current = 0;
        }
    };
    Mode.prototype.previous = function () {
        if (this.current > 0) {
            this.current--;
        }
        else {
            this.current = this.modes.length - 1;
        }
    };
    return Mode;
}());
var AirCleaner = /** @class */ (function (_super) {
    __extends(AirCleaner, _super);
    function AirCleaner(name, modes) {
        var _this = _super.call(this, name) || this;
        _this.power = 1;
        _this.state = false;
        _this.modes = modes;
        return _this;
    }
    AirCleaner.prototype.getPower = function () {
        return this.power;
    };
    AirCleaner.prototype.incresePower = function () {
        if (this.power < 5) {
            this.power++;
        }
    };
    AirCleaner.prototype.decreasePower = function () {
        if (this.power > 1) {
            this.power--;
        }
    };
    AirCleaner.prototype.getModes = function () {
        return this.modes.getModes();
    };
    AirCleaner.prototype.getCurrent = function () {
        return this.modes.getCurrent();
    };
    AirCleaner.prototype.nextMode = function () {
        this.modes.next();
    };
    AirCleaner.prototype.previousMode = function () {
        this.modes.previous();
    };
    return AirCleaner;
}(ADevice));
var SmartHouse = /** @class */ (function () {
    function SmartHouse(name) {
        this.name = name;
        this.devices = [];
    }
    SmartHouse.prototype.getName = function () {
        return this.name;
    };
    SmartHouse.prototype.addDevice = function (device) {
        this.devices.push(device);
    };
    SmartHouse.prototype.getDevices = function () {
        return this.devices;
    };
    SmartHouse.prototype.getDeviceByName = function (name) {
        // return this.devices.find((device)=>device.name == name);
        return this.devices.filter(function (device) { return device.name == name; });
    };
    SmartHouse.prototype.deleteDeviceByName = function (name) {
        var device1 = this.getDeviceByName(name);
        //  let ind = this.devices.indexOf(device);  
        console.log(device1);
        //	this.devices.splice(ind, 1); 
    };
    SmartHouse.prototype.offAllDevice = function () {
        this.devices.forEach(function (device) { return device.off(); });
    };
    return SmartHouse;
}());
var sh = new SmartHouse("sh1");
var device1 = new AirCleaner("moyka", new Mode(["one", "two"]));
sh.addDevice(device1);
sh.addDevice(new AirCleaner("air", new Mode(["three", "four", "five"])));
