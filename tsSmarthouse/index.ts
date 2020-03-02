interface IDevice{
    name: string
    state: boolean

    on(): boolean
    off(): boolean
    getState(): boolean
}

abstract class ADevice implements IDevice{
    name: string;
    abstract state: boolean;
    
    constructor(name: string) {
        this.name = name
    }
    abstract getModes(): string[];
    abstract getCurrent(): string;
    abstract nextMode(): void;
    abstract previousMode(): void;

    on() {
		return this.state = true;
	}

	off() {
		return this.state = false;
	}

    setName(name: string) {
		this.name = name;
	}

	getName() {
		return this.name;
    }
    
    getState() {
		return this.state;
	}
}

interface IMode {
    modes: string[]
    current: number

    getCurrent(): string
    getModes(): string[]
    previous(): void
    next(): void
}

class Mode implements IMode{
    public modes: string[];
    public current: number = 0;
    
    constructor(modes: string[]) {
        this.modes = modes;
    }

    getModes() {
        return this.modes;
    }
    
    getCurrent() {
        return this.modes[this.current];
    }

    next() {
        if(this.current < this.modes.length - 1) {
            this.current++;
        } else {
            this.current = 0;
        }
    }
    
    previous() {
        if(this.current > 0) {
            this.current--;
        } else {
            this.current = this.modes.length - 1;
        }
    }

}

class AirCleaner extends ADevice{
    protected modes: IMode;
    protected power: number = 1;
    public state: boolean = false;

    constructor(name: string, modes: Mode) {
        super(name);
        this.modes = modes;
    }

    getPower() {
		return this.power;
	}

	incresePower() {
		if(this.power < 5){
            this.power++;
        }
	}

	decreasePower() {
		if(this.power > 1){
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

class SmartHouse {
     name: string;
     devices: IDevice[]

    constructor(name: string){
		this.name = name;
		this.devices = [];
	}

	getName() {
		return this.name;
	}

	addDevice(device: IDevice) {
		this.devices.push(device);
	}

	getDevices() {
		return this.devices;
	}

	getDeviceByName(name: string) {
       // return this.devices.find((device)=>device.name == name);
        return this.devices.filter((device)=>device.name == name);
	}

	deleteDeviceByName(name: string) {
		let device1 = this.getDeviceByName(name); 
      //  let ind = this.devices.indexOf(device);  
        
      console.log(device1);
		
	//	this.devices.splice(ind, 1); 
	}

	offAllDevice() {
		this.devices.forEach((device) => device.off());
	}
/*
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
    */
}



const sh = new SmartHouse("sh1");

const device1 = new AirCleaner("moyka", new Mode(["one", "two"]));
sh.addDevice(device1);
sh.addDevice(new AirCleaner("air", new Mode(["three", "four", "five"])));