Here is a TypeScript solution for the problem:

```typescript
class MinStack {
    private stack: number[];
    private minStack: number[];

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(x: number): void {
        this.stack.push(x);
        if (this.minStack.length === 0 || x <= this.getMin()) {
            this.minStack.push(x);
        }
    }

    pop(): void {
        let x = this.stack.pop();
        if (x === this.getMin()) {
            this.minStack.pop();
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());  // Returns -3.
minStack.pop();
console.log(minStack.top());     // Returns 0.
console.log(minStack.getMin());  // Returns -2.
```

This solution uses two stacks: one to store all the elements and the other to store the minimum elements. The top element of the minStack is the minimum of the stack. When a new element is pushed into the stack, if it is smaller than the current minimum, it is also pushed into the minStack. When an element is popped from the stack, if it is the current minimum, it is also popped from the minStack. Therefore, the minimum of the stack can always be retrieved in constant time by accessing the top element of the minStack.