class SmartHouse {
    private name: string;
    private devices: IDevice[];
    constructor(name: string) {
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
         return this.devices.find((device)=>device.getName() === name);
    }

    deleteDeviceByName(name: string) {
        let element = this.getDeviceByName(name);
        if(typeof element != "undefined"){
            this.devices.splice(this.devices.indexOf(element), 1);
        } else {
            console.log("nothing to delete");
        }
    }

    offAllDevice() {
        this.devices.forEach((device) => device.off());
    }

    delayOn(name: string, delay:number, callback: Function) {
		const device: any  = this.getDeviceByName(name); 
		 setTimeout(
			 () => {
				 device.on();
				 callback();
				 console.log(device.name, device.state);
			 }
			 , delay
		 )
	}

	delayOff(name:string, delay: number, callback: Function) {
		const offDevice: any  = this.getDeviceByName(name); 
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
