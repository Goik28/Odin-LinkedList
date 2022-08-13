class LinkedList {
  head = null;
  tail = null;
  size = 0;

  createNode(value) {
    return new LinkedNode(value);
  }

  append(value) {
    if (this.size == 0) {
      this.head = this.createNode(value);
      this.tail = this.head;
      this.size++;
    } else {
      this.tail.nextNode = this.createNode(value);
      this.tail = this.tail.nextNode;
      this.size++;
    }
  }

  prepend(value) {
    if (this.size == 0) {
      this.head = this.createNode(value);
      this.tail = this.head;
      size++;
    } else {
      const newNode = this.createNode(value);
      newNode.nextNode = this.head;
      this.head = newNode;
      this.size++;
    }
  }

  pop() {
    let current;
    current = this.head;
    while (current.nextNode != this.tail) {
      current = current.nextNode;
    }
    this.tail = current;
    current.nextNode = null;
    this.size--;
  }

  at(index) {
    if (index >= this.size) {
      return null;
    }
    let current;
    current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
  }

  contains(value) {
    let current;
    current = this.head;
    do {
      if (current.value === value) {
        return true;
      } else {
        current = current.nextNode;
      }
    } while (current !== null);
    return false;
  }

  find(value) {
    let current;
    let index = 0;
    current = this.head;
    while (current != null) {
      if (current.value === value) {
        return index;
      } else {
        current = current.nextNode;
        index++;
      }
    }
    return null;
  }

  toString() {
    let current;
    let string = "";
    current = this.head;
    do {
      string = string + current.value + " -> ";
      current = current.nextNode;
    } while (current !== null);
    string = string + "null";
    return string;
  }

  insertAt(value, index) {
    if (index == 0) {
      this.prepend(value);
      return;
    }
    if (index >= this.size) {
      console.log("Error - no such index exists");
      return;
    }
    let current;
    const newNode = this.createNode(value);
    current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }
    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
    this.size++;
  }

  removeAt(index) {
    if (index >= this.size) {
      return null;
    }
    if (index == 0) {
      const newHead = this.head.nextNode;
      this.head.nextNode = null;
      this.head = newHead;
      this.size--
      return;
    }
    if (index == this.size - 1) {
      this.pop();
      this.size--
      return;
    }
    let current;
    let lastNode;
    current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }
    lastNode = current;
    current = current.nextNode;
    lastNode.nextNode = current.nextNode;
    this.size--
  }
}

class LinkedNode {
  value = null;
  nextNode = null;

  constructor(value) {
    this.value = value;
  }
}

//testing
const ll = new LinkedList();
ll.append("c");
ll.append("d");
ll.append("f");
ll.prepend("b");
ll.append("g");
ll.prepend("a");
ll.insertAt("e", 4);
console.log(ll.toString());
console.log(ll.contains("g"));
ll.pop();
console.log(ll.toString());
console.log(ll.contains("g"));
console.log(ll.at(1));
console.log(ll.at(7));
console.log(ll.at(5));
console.log(ll.find("b"));
console.log(ll.find("g"));
console.log(ll.find("f"));
ll.removeAt(1);
console.log(ll.toString());
ll.removeAt(7);
ll.removeAt(4);
console.log(ll.toString());
