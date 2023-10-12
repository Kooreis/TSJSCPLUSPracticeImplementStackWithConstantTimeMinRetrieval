```cpp
#include <iostream>
#include <stack>
using namespace std;

class MinStack {
    stack<int> s;
    stack<int> min_s;

public:
    void push(int x) {
        s.push(x);
        if (min_s.empty() || x <= getMin())
            min_s.push(x);
    }

    void pop() {
        if (s.top() == getMin())
            min_s.pop();
        s.pop();
    }

    int top() {
        return s.top();
    }

    int getMin() {
        return min_s.top();
    }
};

int main() {
    MinStack minStack;
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    cout << minStack.getMin() << endl; // Returns -3.
    minStack.pop();
    cout << minStack.top() << endl; // Returns 0.
    cout << minStack.getMin() << endl; // Returns -2.
    return 0;
}
```