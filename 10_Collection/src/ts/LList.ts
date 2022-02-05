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

    constructor(input: number) {
        this.root = null;
        this.tail = null;
        this.size = 0;
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

    getSize(): number {
        return 0;
    }

    set(item, idx): void {
    }

    get(idx): number {
        return 0;
    }

    remove(item): void {
    }

    toArray(): number[] {
        return [];
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

    sort(): void {
    }

    print(): void {
    }
}