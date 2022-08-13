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
      size++;
    } else {
      this.tail.nextNode = this.createNode(value);
      this.tail = tail.nextNode;
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
      newNode.nextNode = head;
      head = newNode;
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
    while (current != null) {
      if (current.value === value) {
        return true;
      } else {
        current = current.nextNode;
      }
    }
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
    return -1;
  }

  toString() {
    let current;
    let string = "First: ";
    current = this.head;
    do {
      string.concat(current.value + " -> ");
    } while (current.nextNode != null);
    string.concat(" null");
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
    if (index == 0) {
      const newHead = this.head.nextNode;
      this.head.nextNode = null;
      this.head = newHead;
      return;
    }
    if (index == this.size - 1) {
      this.pop();
    }
    let current;
    let lastNode;
    current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }
    lastNode = current;
    current = current.nextNode;
    lastNode.newNode = current.newNode;
  }
}

class LinkedNode {
  value = null;
  nextNode = null;

  constructor(value) {
    this.value = value;
  }
}
