import {IList} from './types';

export class AList implements IList {
    private array: number[];
    private size: number;

    constructor(array) {
        this.array = array || [];
        this.size = this.array.length || 0;
    }

    add(item): void {
        this.array[this.size] = item;
        this.size++;
    }

    clear(): void {
        this.array.length = 0;
        this.size = 0;
    }

    getSize(): number {
        return this.size;
    }

    get(idx): number {
        return this.array[idx];
    }

    set(item, idx): void {
        this.array[idx] = item;
    }

    remove(item): void {

    }

    toArray(): number[] {
        return this.array;
    }

    toString(): string {
        let str = '';
        for (let i = 0; i < this.size; i++) {
            str = str + this.array[i];
        }
        return str;
    }

    contains(item): boolean {
        for (const iElement of this.array) {
            if (item === iElement) {
                return true;
            }
        }
        return false;
    }

    minValue(): number {
        let min = this.array[0];
        for (let i = 0; i < this.size; i++) {
            if (min > this.array[i]) min = this.array[i];
        }
        return min;
    }

    maxValue(): number {
        let max = this.array[0];
        for (let i = 0; i < this.size; i++) {
            if (max < this.array[i]) max = this.array[i];
        }
        return max;
    }

    minIndex(): number {
        let min = this.array[0];
        let minIndex = 0;
        for (let i = 0; i < this.size; i++) {
            if (min > this.array[i]) {
                min = this.array[i];
                minIndex = i;
            }
        }
        return minIndex;
    }

    maxIndex(): number {
        let max = this.array[0];
        let maxIndex = 0;
        for (let i = 0; i < this.size; i++) {
            if (max < this.array[i]) {
                max = this.array[i];
                maxIndex = i;
            }
        }
        return maxIndex;
    }

    revers(): void {
        for (let i = 0, j = this.size - 1; i < j; i++, j--) {
            const tmp = this.array[i];
            this.array[i] = this.array[j];
            this.array[j] = tmp
        }
    }

    halfRevers(): void {
        const firstHalf = Math.ceil(this.size / 2);
        const secondHalf = this.size - firstHalf;
        for (let i = 0; i < firstHalf; i++) {
            const temp = this.array[i];
            this.array[i] = this.array[secondHalf + i];
            this.array[secondHalf + i] = temp;
        }
    }

    retainAll(items: number[]): void {
    }

    removeAll(items: number[]): void {
    }

    sort(): void {

    }

    print(): void {
        for (let i = 0; i < this.size; i++) {
            console.log(this.array[i]);
        }
    }
}
