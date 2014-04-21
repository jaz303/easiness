!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.easiness=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var map = _dereq_('map-range');

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
},{"map-range":2}],2:[function(_dereq_,module,exports){
module.exports = function(fn, inStart, inEnd, outStart, outEnd) {

    if (outStart === void 0) {
        outStart = inStart;
        outEnd = inEnd;
        inStart = 0;
        inEnd = 1;
    }

    var inRange = inEnd - inStart,
        outRange = outEnd - outStart;

    return function(val) {
        var original = fn((val - inStart) / inRange);
        return outStart + (outRange * original);
    }

}
},{}]},{},[1])
(1)
});