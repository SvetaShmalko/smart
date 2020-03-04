abstract class ADevice implements IDevice {
    private name: string;
    private state: boolean;
    public constructor(name: string) {
        this.name = name;
        this.state = false;
    }
    public getName() {
        return this.name;
    }
    public setName(name: string) {
        this.name = name;
    }
    public getState() {
        return this.state;
    }
    public on() {
        this.state = true;
    }
    public off() {
        this.state = false;
    }
    
}
