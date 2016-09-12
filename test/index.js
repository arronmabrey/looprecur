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
