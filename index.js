var map = require('map-range');

var HALF_PI = Math.PI / 2;

exports.linear = function(x) {
    return x;
}

exports.smooth = function(x) {
    return (x*x) * (3 - (2*x));
}

exports.easeInQuad = function(x) {
    return x * x;
}

exports.easeOutQuad = function(x) {
    return -x * (x-2);
}

exports.easeInOutQuad = function(x) {
    x *= 2;
    if (x < 1) {
        return (x*x) * 0.5;
    } else {
        return -0.5 * ((x-1)*(x-3)-1);
    }
}

exports.easeInSine = function(x) {
    return -Math.cos(x * HALF_PI) + 1;
}

exports.easeOutSine = function(x) {
    return Math.sin(x * HALF_PI);
}

exports.easeInOutSine = function(x) {
    return -0.5 * (Math.cos(x * Math.PI) - 1);
}

var fns = [
    'linear', 'smooth',
    'easeInQuad', 'easeOutQuad', 'easeInOutQuad',
    'easeInSine', 'easeOutSine', 'easeInOutSine'
];

fns.forEach(function(functionName) {

    var fn = exports[functionName];

    fn.mapped = function(inStart, inEnd, outStart, outEnd) {
        return map(fn, inStart, inEnd, outStart, outEnd);
    }

});