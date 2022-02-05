import {IList} from './types'

class Node {
    value: number;
    next: Node;

    constructor(value: number, next?: Node) {
        this.value = value;
        this.next = next || null;
    }
}

export class LList implements IList {
    private root: Node | null;
    private size: number;
    private tail: Node | null;

    constructor(input) {
        if (input && Array.isArray(input)) {
            for (let i = 0; i < input.length; i++) {
                this.add(input[i])
            }
        } else if (input && typeof input === 'number') {
            for (let i = 0; i < input; i++) {
                this.add(0)
            }
        } else if (!input) {
            this.root = null;
            this.tail = null;
            this.size = 0;
        } else {
            throw new Error('Invalid input data')
        }
    }

    add(item): void {
        const node = new Node(item);

        if(!this.root) {
            this.root = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
    }

    clear(): void {
        this.root = null;
    }

    getSize(): number {
        let current = this.root;
        this.size = 0
        while(current) {
            this.size++;
            current = current.next;
        }
        return this.size;
    }

    set(item, idx): void {
    }

    get(idx): number {
        return 0;
    }

    remove(item): void {
    }

    toArray(): number[] {
        const array = []
        let current = this.root
        while (current) {
            array[array.length] = current.value
            current = current.next
        }
        return array;
    }

    toString(): string {
        return '';
    }

    contains(item): boolean {
        return false;
    }

    minValue(): number {
        return 0;
    }

    maxValue(): number {
        return 0;
    }

    minIndex(): number {
        return 0;
    }

    maxIndex(): number {
        return 0;
    }

    revers(): void {
    }

    halfRevers(): void {
    }

    retainAll(items: number[]): void {
    }

    removeAll(items: number[]): void {
    }

    print(): void {
        let current = this.root;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }

    sort(): void {
    }
}