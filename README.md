# easiness

...another easing equation library! Why!?

Most easing libraries export functions which take a bunch of arguments, capturing all sorts of wonderful details of an animation, such as start and end values, start and end times, plus the current time. This is a rather complicated way of representing what essentially boils down to a simple interpolation between the values of 0 and 1; anything extra is just noise that distracts from the essence of the calculation. For further information, take a look at Jari Komppa's article [Interpolation Tricks](http://sol.gfxile.net/interpolation/) where he explains matters much better than I am able.

`easiness` is a collection of 'pure' easing functions designed to work with domain and range `0..1` - single number in, single number out. Easy-peasy. If you find yourself in a situation where you need to interpolate between other values, each of `easiness`'s functions offers a `.mapped()` method to derive another single argument function that can map any domain/range you desire.

## Installation

    $ npm install easiness

## Require

```javascript
var easiness = require('easiness');
```

## API

#### `easiness.$easeFn(x)`

Replace `$easeFn` with one of:

  * `linear`
  * `smooth`
  * `easeInQuad`
  * `easeOutQuad`
  * `easeInOutQuad`
  * `easeInSine`
  * `easeOutSine`
  * `easeInOutSine`

#### `easiness.$easeFn.mapped(inStart, inEnd, outStart, outEnd)`

Derives a new easing function based on $easeFn that expects an argument in the range `inStart..inEnd` and interpolates it between `outStart..outEnd`.

A 2-argument form of `mapped()` is also available in which `inStart` and `inEnd` are assumed to be 0 and 1, respectively. The resulting derived function will interpolate the values in the range `0..1` between `outStart` and `outEnd`.