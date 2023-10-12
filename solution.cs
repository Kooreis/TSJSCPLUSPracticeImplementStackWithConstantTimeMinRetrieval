Here is a JavaScript solution using a stack data structure:

```javascript
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        if (this.minStack.length === 0 || val <= this.getMin()) {
            this.minStack.push(val);
        }
    }

    pop() {
        const removedElement = this.stack.pop();
        if (removedElement === this.getMin()) {
            this.minStack.pop();
        }
        return removedElement;
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());  // Returns -3
minStack.pop();
console.log(minStack.top());     // Returns 0
console.log(minStack.getMin());  // Returns -2
```

This solution uses two stacks: one to store all the elements (the `stack` array) and another to store the minimum elements (the `minStack` array). The `push` method pushes the value onto the `stack` array and also checks if the value is less than or equal to the current minimum value (retrieved by the `getMin` method). If it is, it also pushes the value onto the `minStack` array. The `pop` method pops the top element from the `stack` array and also checks if the popped element is the current minimum value. If it is, it also pops the top element from the `minStack` array. The `top` method returns the top element of the `stack` array. The `getMin` method returns the top element of the `minStack` array, which is always the minimum element.