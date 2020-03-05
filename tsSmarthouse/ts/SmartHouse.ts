class SmartHouse {
    private name: string
    private devices: IDevice[]
    public constructor(name: string) {
        this.name = name
        this.devices = []
    }
    public getName() {
        return this.name
    }

    public addDevice(device: IDevice) {
        this.devices.push(device)
    }

    public getDevices() {
        return this.devices
    }

    public getDeviceByName(name: string) {
         return this.devices.find((device)=>device.getName() === name)
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
    
    public async delayOn(name:string, delay: number): Promise<void> {
        await new Promise((resolve) => {
            setTimeout(() => {
                this.getDeviceByName(name).on();
                resolve();
            }, delay);
        });
    }
    
    public async delayOff(name:string, delay: number): Promise<void> {
        await new Promise((resolve) => {
            setTimeout(() => {
                this.getDeviceByName(name).off()
                resolve();
            }, delay);
        });
    }

}
