"use strict";

class Mode {
    constructor(modes){
        this._modes = modes;
        this._current = 0;
    }

    get modes() {
        return this._modes;
    }
    
    get current() {
        return this._modes[this._current];
    }

    next() {
        if(this._current < this._modes.length - 1) {
            this._current++;
        } else {
            this._current = 0;
        }
    }
    
    previous() {
        if(this._current > 0) {
            this._current--;
        } else {
            this._current = this._modes.length - 1;
        }
    }

}


//////////////////////////////////////////////
/*
function Mode(modes) {
    this._modes = modes;
    this._current = 0;
}

Mode.prototype.getModes = function() {
    return this._modes;
}

Mode.prototype.getCurrent = function() {
    return this._modes[this._current];
};

Mode.prototype.next = function() {

	if(this._current < this._modes.length - 1) {
		this._current++;
	} else {
		this._current = 0;
	}
};

Mode.prototype.previous = function() {
    
	if(this._current > 0) {
		this._current--;
	} else {
		this._current = this._modes.length - 1;
	}
};

*/
