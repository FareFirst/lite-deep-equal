# lite-deep-equal

[![Build Status](https://github.com/FareFirst/lite-deep-equal/workflows/build/badge.svg?branch=master)](https://github.com/FareFirst/lite-deep-equal/actions?query=workflow%3A%22build%22+branch%3Amaster)

A simple lightweight alternative for [deep-equal](https://www.npmjs.com/package/deep-equal)

This package is based on https://stackoverflow.com/a/32922084/1866804

Compatible with Node and Browser

This package support all basic types in Javascript: Object, Array, Number, String, null & undefined

## Install

```bash
npm install lite-deep-equal
```

## Usage

```js
const deepEqual = require('lite-deep-equal');

console.dir(
  deepEqual(
    { a: [2, 3], b: [4] },
    { a: [2, 3], b: [4] },
  ),
);


// => true

console.dir(
  deepEqual(
    { x: 5, y: [6] },
    { x: 5, y: 6 },
  ),
);


// => false

console.dir(
  deepEqual(
    {
      a: [2, 3],
      c: {
        e: ['hello', 2],
      },
      b: [4],
      d: null,
    },
    {
      a: [2, 3],
      b: [4],
      c: {
        e: ['hello', 2],
      },
      d: null,
    },
  ),
);

// => true
```

## Methods

### deepEqual(a, b, opts)

```js
const deepEqual = require('lite-deep-equal');
```
Compare objects a and b, returning whether they are equal according to a recursive equality algorithm.

## Contributing

PR's are welcome!

Thanks to all [the contributors](https://github.com/FareFirst/lite-deep-equal/graphs/contributors)!
