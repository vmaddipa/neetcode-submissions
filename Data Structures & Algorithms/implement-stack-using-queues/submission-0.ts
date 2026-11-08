class MyStack {
    private q1: number[] = [];
    private q2: number[] = [];

    push(x: number): void {
        this.q2.push(x);
        
        // Move all elements from q1 to q2
        while (this.q1.length > 0) {
            this.q2.push(this.q1.shift()!);
        }
        
        // Swap q1 and q2
        [this.q1, this.q2] = [this.q2, this.q1];
    }

    pop(): number {
        return this.q1.shift()!;
    }

    top(): number {
        return this.q1[0];
    }

    empty(): boolean {
        return this.q1.length === 0;
    }
}