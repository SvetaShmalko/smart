interface IMode {
    getCurrent(): string
    getModes(): string[]
    next(): void
    previous(): void
    
}
