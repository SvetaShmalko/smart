"use strict";

class AirCleaner extends Device {
    constructor(name, modes){
        super(name);
        this._modes = modes;
	    this._power = 1;
    }

    get power() {
		return this._power;
	}

	incresePower() {
		if(this._power < 5){
            this._power++;
        }
	}

	decreasePower() {
		if(this._power > 1){
            this._power--;
        }
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


////////////////////////////////////////////
/*
function AirCleaner(name, modes) {

	Device.call(this, name);
	
	this._modes = modes;
	this._power = 1;
}

AirCleaner.prototype = Object.create(Device.prototype);
AirCleaner.prototype.constructor = AirCleaner;


AirCleaner.prototype.getPower = function() {
	return this._power;
};

AirCleaner.prototype.incresePower = function() {
	if(this._power < 5){
        this._power++;
	}
};

AirCleaner.prototype.decreasePower = function() {
	if(this._power > 1){
        this._power--;
	}
};

AirCleaner.prototype.getModes = function() {
	return this._modes.getModes();
};

AirCleaner.prototype.getCurrent = function() {
	return this._modes.getCurrent();
};

AirCleaner.prototype.nextMode = function() {
	this._modes.next();
};

AirCleaner.prototype.previousMode = function() {
	this._modes.previous();
};
*/



