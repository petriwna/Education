"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AList = void 0;
var AList = /** @class */ (function () {
    function AList() {
        this.array = [];
        this.size = 0;
    }
    AList.prototype.add = function (item) {
        this.array[this.size] = item;
        this.size++;
    };
    AList.prototype.clear = function () {
        this.array.length = 0;
        this.size = 0;
    };
    AList.prototype.contains = function (item) {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var iElement = _a[_i];
            if (item === iElement) {
                return true;
            }
        }
        return false;
    };
    AList.prototype.get = function (idx) {
    };
    AList.prototype.getSize = function () {
    };
    AList.prototype.halfRevers = function () {
    };
    AList.prototype.maxIndex = function () {
        return 0;
    };
    AList.prototype.maxValue = function () {
        return 0;
    };
    AList.prototype.minIndex = function () {
        return 0;
    };
    AList.prototype.minValue = function () {
        return 0;
    };
    AList.prototype.print = function () {
    };
    AList.prototype.remove = function (item) {
    };
    AList.prototype.removeAll = function (items) {
    };
    AList.prototype.retainAll = function (items) {
    };
    AList.prototype.revers = function () {
    };
    AList.prototype.set = function (item, idx) {
    };
    AList.prototype.sort = function () {
    };
    AList.prototype.toArray = function () {
        return [];
    };
    return AList;
}());
exports.AList = AList;
var aList = new AList();
var ar = [0, 1, 3];
console.log(aList.add(ar));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBO0lBSUk7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsbUJBQUcsR0FBSCxVQUFJLElBQUk7UUFDSixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxxQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRCx3QkFBUSxHQUFSLFVBQVMsSUFBSTtRQUNULEtBQXVCLFVBQVUsRUFBVixLQUFBLElBQUksQ0FBQyxLQUFLLEVBQVYsY0FBVSxFQUFWLElBQVUsRUFBQztZQUE3QixJQUFNLFFBQVEsU0FBQTtZQUNmLElBQUcsSUFBSSxLQUFLLFFBQVEsRUFBQztnQkFDakIsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELG1CQUFHLEdBQUgsVUFBSSxHQUFHO0lBQ1AsQ0FBQztJQUVELHVCQUFPLEdBQVA7SUFDQSxDQUFDO0lBRUQsMEJBQVUsR0FBVjtJQUNBLENBQUM7SUFFRCx3QkFBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsd0JBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVELHdCQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCx3QkFBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQscUJBQUssR0FBTDtJQUNBLENBQUM7SUFFRCxzQkFBTSxHQUFOLFVBQU8sSUFBSTtJQUNYLENBQUM7SUFFRCx5QkFBUyxHQUFULFVBQVUsS0FBZTtJQUN6QixDQUFDO0lBRUQseUJBQVMsR0FBVCxVQUFVLEtBQWU7SUFDekIsQ0FBQztJQUVELHNCQUFNLEdBQU47SUFDQSxDQUFDO0lBRUQsbUJBQUcsR0FBSCxVQUFJLElBQUksRUFBRSxHQUFHO0lBQ2IsQ0FBQztJQUVELG9CQUFJLEdBQUo7SUFDQSxDQUFDO0lBRUQsdUJBQU8sR0FBUDtRQUNJLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQTdFQSxBQTZFQyxJQUFBO0FBN0VZLHNCQUFLO0FBK0VsQixJQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0FBQzFCLElBQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztBQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJBTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElMaXN0IH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQUxpc3QgaW1wbGVtZW50cyBJTGlzdHtcclxuICAgIHByaXZhdGUgYXJyYXk6IG51bWJlcltdO1xyXG4gICAgcHJpdmF0ZSBzaXplOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5hcnJheSA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKGl0ZW0pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFycmF5W3RoaXMuc2l6ZV0gPSBpdGVtO1xyXG4gICAgICAgIHRoaXMuc2l6ZSsrO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYXJyYXkubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLnNpemUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5zKGl0ZW0pOiBib29sZWFuIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGlFbGVtZW50IG9mIHRoaXMuYXJyYXkpe1xyXG4gICAgICAgICAgICBpZihpdGVtID09PSBpRWxlbWVudCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KGlkeCk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNpemUoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgaGFsZlJldmVycygpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICBtYXhJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIG1heFZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgbWluSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBtaW5WYWx1ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50KCk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZShpdGVtKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQWxsKGl0ZW1zOiBudW1iZXJbXSk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIHJldGFpbkFsbChpdGVtczogbnVtYmVyW10pOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICByZXZlcnMoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KGl0ZW0sIGlkeCk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIHNvcnQoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgdG9BcnJheSgpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBhTGlzdCA9IG5ldyBBTGlzdCgpO1xyXG5jb25zdCBhciA9IFswLDEsM107XHJcbmNvbnNvbGUubG9nKGFMaXN0LmFkZChhcikpO1xyXG4iXSwic291cmNlUm9vdCI6Ii4uIn0=
