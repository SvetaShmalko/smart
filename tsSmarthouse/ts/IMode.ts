interface IMode {
    getCurrent(): string;
    getModes(): string[];
    previous(): void;
    next(): void;
}
