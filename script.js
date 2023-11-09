class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    this.root = this._addNode(this.root, value);
  }

  _addNode(root, value) {
    if (root === null) {
      return new Node(value);
    }
    
    if (value < root.value) {
      root.left = this._addNode(root.left, value);
    } else if (value >= root.value) {
      root.right = this._addNode(root.right, value);
    }

    return root;
  }

  remove(value) {
    this.root = this._removeNode(this.root, value);
  }

  _removeNode(root, value) {
    if (root === null) {
      return null;
    }

    if (value < root.value) {
      root.left = this._removeNode(root.left, value);
    } else if (value > root.value) {
      root.right = this._removeNode(root.right, value);
    } else {
      if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }

      root.value = this._findMinValue(root.right);
      root.right = this._removeNode(root.right, root.value);
    }

    return root;
  }

  _findMinValue(node) {
    let minValue = node.value;
    while (node.left !== null) {
      minValue = node.left.value;
      node = node.left;
    }
    return minValue;
  }

  contains(value) {
    return this._containsNode(this.root, value);
  }

  _containsNode(root, value) {
    if (root === null) {
      return false;
    }

    if (value === root.value) {
      return true;
    } else if (value < root.value) {
      return this._containsNode(root.left, value);
    } else {
      return this._containsNode(root.right, value);
    }
  }

  print() {
    this._inOrderTraversal(this.root);
  }

  _inOrderTraversal(root) {
    if (root !== null) {
      this._inOrderTraversal(root.left);
      console.log(root.value);
      this._inOrderTraversal(root.right);
    }
  }

  getMax() {
    let maxNode = this._findMaxNode(this.root);
    return maxNode ? maxNode.value : null;
  }

  _findMaxNode(node) {
    while (node !== null && node.right !== null) {
      node = node.right;
    }
    return node;
  }

  getMin() {
    let minNode = this._findMinNode(this.root);
    return minNode ? minNode.value : null;
  }

  _findMinNode(node) {
    while (node !== null && node.left !== null) {
      node = node.left;
    }
    return node;
  }

  getCount() {
    return this._countNodes(this.root);
  }

  _countNodes(root) {
    if (root === null) {
      return 0;
    }

    return 1 + this._countNodes(root.left) + this._countNodes(root.right);
  }
}

// Приклад використання
const tree = new BinaryTree();

tree.add(10);
tree.add(5);
tree.add(15);
tree.add(3);
tree.add(7);

console.log("Tree elements:");
tree.print();

console.log("\nRemove element 5:");
tree.remove(5);
tree.print();

console.log("\nIs 7 in the tree?", tree.contains(7)); // true
console.log("Is 5 in the tree?", tree.contains(5)); // false

console.log("\nMax element:", tree.getMax()); // 15
console.log("Min element:", tree.getMin()); // 3

console.log("\nNumber of elements in the tree:", tree.getCount());
