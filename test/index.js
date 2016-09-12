var expect = require("expect");
var loop = require("../index.js").default;


(function test () {
    var fn = loop(function(recur, x, n) {
        if (x == n) {
            return x;
        } else {
            return recur(x + 1, n);
        }
    });

    expect(fn(0, 1000000)).toEqual(1000000);
})();


(function test () {
    function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

    var fn = loop(function(recur, x, n/*, y=[]*/) {
        var y = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];

        if (x === n) {
            return y;
        } else {
            return recur(x + 1, n, [].concat(_toConsumableArray(y), [x]));
        }
    });

    expect(fn(0, 3)).toEqual([0,1,2]);
    expect(fn(0, 4)).toEqual([0,1,2,3]);
})();


