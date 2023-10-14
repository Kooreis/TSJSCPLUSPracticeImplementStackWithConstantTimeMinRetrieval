push(x: number): void {
        this.stack.push(x);
        if (this.minStack.length === 0 || x <= this.getMin()) {
            this.minStack.push(x);
        }
    }