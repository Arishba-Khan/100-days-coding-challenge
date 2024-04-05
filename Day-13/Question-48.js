var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var laptop_price1 = [1000, 1300, 1500];
var laptop_price2 = [1200, 1400, 1100];
var laptop_price3 = __spreadArray(__spreadArray([], laptop_price1, true), laptop_price2, true).sort();
console.log(laptop_price3);
