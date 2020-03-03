abstract class ADevice implements IDevice {
    private name: string;
    private state: boolean;
    constructor(name: string) {
        this.name = name;
        this.state = false;
    }
    getName() {
        return this.name;
    }
    setName(name: string) {
        this.name = name;
    }
    getState() {
        return this.state;
    }
    on() {
        this.state = true;
    }
    off() {
        this.state = false;
    }
    
}
