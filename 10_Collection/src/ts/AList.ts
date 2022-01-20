import {IList} from './types';

export class AList implements IList {
    private array: number[];
    private size: number;

    constructor() {
        this.array = [];
        this.size = 0;
    }

    add(item): void {
        this.array[this.size] = item;
        this.size++;
    }

    clear(): void {
        this.array.length = 0;
        this.size = 0;
    }

    contains(item): boolean {
        for (const iElement of this.array) {
            if (item === iElement) {
                return true;
            }
        }
        return false;
    }

    get(idx): number {
        return this.array[idx];
    }

    getSize(): number {
        return this.array.length;
    }

    halfRevers(): void {
    }

    maxIndex(): number {
        let max = this.array[0];
        let maxIndex = 0;
        for (let i = 0; i < this.array.length; i++) {
            if (max < this.array[i]) {
                max = this.array[i];
                maxIndex = i;
            }
        }
        return maxIndex;
    }

    maxValue(): number {
        let max = this.array[0];
        for (let i = 0; i < this.array.length; i++) {
            if (max < this.array[i]) max = this.array[i];
        }
        return max;
    }

    minIndex(): number {
        let min = this.array[0];
        let minIndex = 0;
        for (let i = 0; i < this.array.length; i++) {
            if (min > this.array[i]) {
                min = this.array[i];
                minIndex = i;
            }
        }
        return minIndex;
    }

    minValue(): number {
        let min = this.array[0];
        for (let i = 0; i < this.array.length; i++) {
            if (min > this.array[i]) min = this.array[i];
        }
        return min;
    }

    print(): void {
        for (let i = 0; i < this.array.length; i++){
            console.log(this.array[i]);
        }
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

const aList = new AList();
const ar = [0, 1, 3];
console.log(aList.add(ar));
