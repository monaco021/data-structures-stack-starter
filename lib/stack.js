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
        this.arr = new Array();
        this.length = 0;
        this.top = null;
    }

    remove() {
        if(this.top) {
            return this.top.pop();
        }
    }
}

// let instance = new Node(3);
// console.log(instance);



exports.Node = Node;
exports.Stack = Stack;
