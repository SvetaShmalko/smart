"use strict";

class RobotHoover extends Device {
	constructor(name, modes) {
		super(name);
		this._modes = modes;
    	this._waterTank = false;
	}

	setWater() {
		this._waterTank = true;
	}

	waterOut() {
		this._waterTank = false;
	}

	get modes() {
        return this._modes.modes;
    }

    getCurrent() {
        return this._modes.current;
    }

    nextMode() {
        this._modes.next();
    }

    previousMode() {
        this._modes.previous();
    }

}



///////////////////////////////////////////////////
/*
function RobotHoover(name, modes) {

	Device.call(this, name);
	
    this._modes = modes;
    this._waterTank = false;
}

RobotHoover.prototype = Object.create(Device.prototype);
RobotHoover.prototype.constructor = RobotHoover;

RobotHoover.prototype.setWater = function() {
	this._waterTank = true;
};

RobotHoover.prototype.waterOut = function() {
	this._waterTank = false;
};

RobotHoover.prototype.getModes = function() {
	return this._modes.getModes();
};

RobotHoover.prototype.getCurrent = function() {
	return this._modes.getCurrent();
};

RobotHoover.prototype.nextMode = function() {
	this._modes.next();
};

RobotHoover.prototype.previousMode = function() {
	this._modes.previous();
};


/*
RobotHoover.prototype.delayedCleaning = function(delay) {
	var tempFunc = this.on.bind(this);
	 setTimeout(tempFunc, delay);
}; */
/*
RobotHoover.prototype.changeMode = function() {
	if(this._currentMode == 0) {
		if(this._waterTank == true) {
			this._currentMode = 1;
		} else {
			alert("наберите,пожалуйста, воды");
		}
	} else {
		this._currentMode = 0;
	}
};
*/

