import {IList} from './types'

class Node {
    private value: number;
    next: Node;
    constructor(value: number, next?:Node) {
        this.value = value;
        this.next = next || null;
    }
}

export class LList implements IList {
    private root: Node | null;
    private size: number;
    private tail: Node | null;
    // constructor()
    // constructor({input}: { input: number[] })
    constructor(input: number) {
        this.root = null;
        this.tail = null;
        this.size = 0;
        // if (input && Array.isArray(input)) {
        //
        // } else if (input && typeof input === 'number') {
        //
        // } else if (!input) {
        //
        // } else {
        //     throw new Error('Invalid input data!');
        // }
    }

    add(item): void {
        if (this.root !== null){
            this.root.next = new Node(item)
        }
        this.root = new Node(item);
        this.size++
    }

    clear(): void {
        this.root = null;
    }

    contains(item): boolean {
        return false;
    }

    get(idx): number {
        return 0;
    }

    getSize(): number {
        return 0;
    }

    halfRevers(): void {
    }

    maxIndex(): number {
        return 0;
    }

    maxValue(): number {
        return 0;
    }

    minIndex(): number {
        return 0;
    }

    minValue(): number {
        return 0;
    }

    print(): void {
    }

    remove(item): void {
    }

    removeAll(items: number[]): void {
    }

    retainAll(items: number[]): void {
    }

    revers(): void {
    }

    set(item, idx): void {
    }

    sort(): void {
    }

    toArray(): number[] {
        return [];
    }

}