module.exports = cache;
function cache(f) {
    let member = {};

    return function (x, y){
        if (!((x in member) && (y in member))){
            member[x] = f.call(this.x);
            member[y] = f.call(this.y);
            return true;
        }
        return false;
    }
}