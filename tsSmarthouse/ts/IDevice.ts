interface IDevice {
    name: string;
    state: boolean;
    on(): boolean;
    off(): boolean;
    getState(): boolean;
}
