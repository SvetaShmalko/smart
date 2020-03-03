abstract class ADevice implements IDevice {
    name: string;
    abstract state: boolean;
    constructor(name: string) {
        this.name = name;
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
