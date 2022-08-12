class LinkedList {
  head = null;
  tail = null;
  size = null;

  constructor(node) {
    this.head = node;
    this.tail = node;
    this.size = 1;
  }

  createNode(value) {
    return new LinkedNode(value);
  }

  append(value) {
    this.tail.nextNode = this.createNode(value);
    this.tail = tail.nextNode;
    this.size++;
  }

  prepend(value) {
    const newNode = this.createNode(value);
    newNode.nextNode = head;
    head = newNode;
    this.size++;
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

  contains(value) {}

  find(value) {}

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
  insertAt(node, index) {}
  removeAt(index) {}
}

class LinkedNode {
  value = null;
  nextNode = null;

  constructor(value) {
    this.value = value;
  }
}
