import {ITree} from "./tree";

class Node {
    data: number | string;
    left: Node;
    right: Node;

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class BST implements ITree {
    private root: Node;

    constructor() {
        this.root = null;
    }

    clear(): void {
        this.root = null;
    }

    height(): number {
        return 0;
    }

    init(array): void {
        for (let i = 0; i < array.length; i++) {
            this.insert(array[i]);
        }
    }

    insert(value): void {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
            return;
        }

        let current = this.root;
        while (true) {
            if (value < this.root.data) {
                if (current.left == null) {
                    current.left = node;
                    return;
                }
                current = current.left;
            } else if (value > this.root.data) {
                if (current.right == null) {
                    current.right = node;
                    return;
                }
                current = current.right;
            }
        }
    }

    leaves(): number {
        return 0;
    }

    maxNode(): number {
        return 0;
    }

    minNode(): number {
        return 0;
    }

    nodes(): number {
        return 0;
    }

    print(node, calb): void {
    }

    remove(value): void {
    }

    reverse(): void {
    }

    search(value): number {
        function searchRecurse(value,node) {
            if(node === null) {
                return null;
            }
            if (value < node.data) {
                return searchRecurse(value,node.left);
            }
            if (value > node.data) {
                return searchRecurse(value,node.right);
            }
            return node;
        }
        return searchRecurse(value, this.root)
    }

    size(): number {
        return this.toArray().length;
    }

    toArray(): number[] {
        function toArrayRecurse(node) {
            let array = [];
            array.push(node.data);
            if (node.left !== null) {
                array.push(...toArrayRecurse(node.left));
            }
            if (node.right !== null) {
                array.push(...toArrayRecurse(node.right))
            }
            return array;
        }

        return toArrayRecurse(this.root);
    }

    width(): number {
        return 0;
    }

}