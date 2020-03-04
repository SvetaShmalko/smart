class SmartHouse {
    private name: string;
    private devices: IDevice[];
    public constructor(name: string) {
        this.name = name;
        this.devices = [];
    }
    public getName() {
        return this.name;
    }

    public addDevice(device: IDevice) {
        this.devices.push(device);
    }

    public getDevices() {
        return this.devices;
    }

    public getDeviceByName(name: string) {
         return this.devices.find((device)=>device.getName() === name);
    }

    public deleteDeviceByName(name: string) {
        let element = this.getDeviceByName(name);
        if(typeof element != "undefined"){
            this.devices.splice(this.devices.indexOf(element), 1);
        } else {
            console.log("nothing to delete");
        }
    }

    public offAllDevice() {
        this.devices.forEach((device) => device.off());
    }
    
    public delayOn(name:string, delay: number): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(resolve, delay)
        }).then(() => this.getDeviceByName(name).on())
    }
    
    public delayOff(name:string, delay: number): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(resolve, delay)
        }).then(() => this.getDeviceByName(name).off())
    }

}
