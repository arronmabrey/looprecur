var loop = require("../index.js").default;

var inc = loop(function(recur, x, n) {
    if (x == n) {
        return x;
    } else {
        return recur(x + 1, n);
    }
});

try {
    if (inc(0, 1000000) == 1000000) {
        console.log("PASS");
        process.exit(0);
    } else {
        console.log("FAIL");
        process.exit(1);
    }
} catch(e) {
    console.log("BOOM - " + e.message);
    process.exit(1);
}
