interface IMode {
    modes: string[];
    current: number;
    getCurrent(): string;
    getModes(): string[];
    previous(): void;
    next(): void;
}
