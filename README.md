# LoopRecur - simple, safe, recursive JavaScript functions using trampolines.

LoopRecur is small higher-order function that can be used to help simplify writing _safe_ recursive JavaScript functions.

It borrows its style from loop/recur found in Clojure. Although its implementation is very different, as it uses functional trampolines to avoid growing stack frames.

The main idea is you call `loop` providing a recursive function, `loop` returns your function wrapped in a trampoline.

Later when your wrapped function is called, the special `recur` function is inserted as the first argument.
You simply call `recur` with updated arguments for the next iteration and return the result.
The trampoline will execute your function again with an updated arguments, this continues until your function returns a value that is _not_ a function.

```js
import loop from "looprecur"
// var loop = require("looprecur").default

const inc = loop((recur, x, n) => {
    if (x == n) {
        return x
    } else {
        return recur(x + 1, n)
    }
})

inc(0, 1000000) == 1000000
```
