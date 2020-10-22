// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        // this.arr = new Array();
        this.length = 0;
        this.top = null;
    }

    push(value) {
        if (!this.top) {
            this.top = new Node(value);
        } else {
            let current = this.top
            this.top = new Node(value);
            this.top.next = current;
        }
        this.length++;
        return this.length;

    }

    pop() {
        let current = this.top;

        if(this.top === null) {
            return null;
        } else if (this.length === 1) {
            this.top = null;
        } else if (this.length >= 2) {
            let next = this.top.next;
            this.top = next;
        }
        this.length--;
        return current.value;
    }

    size() {
        return this.length
    }
}

// let instance = new Node(3);
// console.log(instance);



exports.Node = Node;
exports.Stack = Stack;
