"use strict";

class SmartHouse{
	constructor(name){
		this._name = name;
		this._devices = [];
	}

	get name() {
		return this._name;
	}

	addDevice(device) {
		this._devices.push(device);
	}

	get devices() {
		return this._devices;
	}

	getDeviceByName(name) {
		return this.devices.find((value)=>value.name == name);
	}

	deleteDeviceByName(name) {
		let device = this.getDeviceByName(name); 
		let ind = this._devices.indexOf(device);  
		
		this._devices.splice(ind, 1); 
	}

	offAllDevice() {
		this._devices.forEach((element)=>element.off());
	}

	delayOn(name, delay, callback) {
		const device  = this.getDeviceByName(name); 
		 setTimeout(
			 () => {
				 device.on();
				 callback();
				 console.log(device.name, device.state);
			 }
			 , delay
		 )
	}

	delayOff(name, delay, callback) {
		const offDevice  = this.getDeviceByName(name); 
		 setTimeout(
			 () => {
				offDevice.off();
				 callback();
				 console.log(offDevice.name, offDevice.state);
			 }
			 , delay
		 )
	}

}

//////////////////////////////////////
/*
function SmartHouse(name) {
	this._name = name;
	this._devices = [];
}

SmartHouse.prototype.getName = function() {
	return this._name;
};

SmartHouse.prototype.addDevice = function(device) {
	this._devices.push(device);
};

SmartHouse.prototype.getDevices = function() {
	return this._devices;
};

SmartHouse.prototype.getDeviceByName = function(name) {

	function condition(value) {
		return value.getName()==name;
	}
	return this.getDevices().filter(condition);

};

SmartHouse.prototype.deleteDeviceByName = function(name) {

	var device = this.getDeviceByName(name); 
	var ind = this._devices.indexOf(device);  
	
	this._devices.splice(ind, 1); 

};

SmartHouse.prototype.offAllDevice = function() {
	this._devices.forEach(function(element){
		element.off();
	});
}
*/





