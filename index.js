var map = require('map-range');

var easingFunctions = require('./raw');

for (var k in easingFunctions) {
    (function(name, fn) {
        fn.mapped = function(inStart, inEnd, outStart, outEnd) {
            return map(fn, inStart, inEnd, outStart, outEnd);
        }
        exports[name] = fn;
    })(k, easingFunctions[k]);
}
