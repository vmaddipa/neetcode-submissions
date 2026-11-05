class BrowserHistory {
    private history: string[];
    private curr: number;

    constructor(homepage: string) {
        this.history = [homepage];
        this.curr = 0;
    }

    visit(url: string): void {
        // Clear forward history by setting length or slicing
        this.history.length = this.curr + 1;
        this.history.push(url);
        this.curr++;
    }

    back(steps: number): string {
        // Cannot go past index 0
        this.curr = Math.max(0, this.curr - steps);
        return this.history[this.curr];
    }

    forward(steps: number): string {
        // Cannot go past the end of the history
        this.curr = Math.min(this.history.length - 1, this.curr + steps);
        return this.history[this.curr];
    }
}