class MinStack {
    private stack = [];
    private minStack = [];
    constructor() {
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
        const min = this.minStack.length == 0 ? val : this.minStack[this.minStack.length - 1];
        this.minStack.push(Math.min(val, min));
    }

    /**
     * @return {void}
     */
    pop(): void {
        if(this.stack.length === 0) return;
        this.stack.pop();
        this.minStack.pop();

    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}
