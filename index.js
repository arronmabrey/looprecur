(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.actual = mod.exports;
    }
})(this, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function loop(fn) {
        var fnargs = [void 0, recur];
        function recur() {
            for(var _len = arguments.length, _key = 0; _key < _len; _key++)
                fnargs[_key+2] = arguments[_key];
            return fn.bind.apply(fn, fnargs)
        };
        return function() {
            for(var result = recur.apply(void 0, arguments); result instanceof Function;)
                result = result();
            return result
        }
    }

    exports.default = loop;
});

