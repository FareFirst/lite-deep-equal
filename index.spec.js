const deepEqual = require('./index');

describe('deepEqual', () => {
  it('should support nested Object', () => {
    expect(deepEqual(
      {},
      {},
    )).toBeTruthy();

    expect(deepEqual(
      { a: 2 },
      { b: 2 },
    )).toBeFalsy();

    expect(deepEqual(
      { a: 2 },
      { a: 2 },
    )).toBeTruthy();

    expect(deepEqual(
      { a: 2, b: 3 },
      { a: 2 },
    )).toBeFalsy();

    expect(deepEqual(
      { a: 2 },
      { a: 2, b: 4 },
    )).toBeFalsy();

    expect(deepEqual(
      { a: 2, c: 4 },
      { a: 2, b: 4 },
    )).toBeFalsy();

    expect(deepEqual(
      { a: 2, b: 3 },
      { a: 2, b: 3 },
    )).toBeTruthy();

    expect(deepEqual(
      { a: 2, c: [1, 'adb'] },
      { a: 2, c: ['adb', 1] },
    )).toBeFalsy();

    expect(deepEqual(
      { a: 2, c: [1, 'adb'] },
      { a: 2, c: [1, 'adb'] },
    )).toBeTruthy();

    expect(deepEqual(
      {
        a: 2,
        c: [1, 'adb', {
          c: {
            b: 1,
            g: 5,
          },
        }],
        d: {
          d: 'yo',
          c: [23.5, 22],
        },
        b: 'yo',
        s: null,
        r: undefined,
      },
      {
        a: 2,
        b: 'yo',
        c: [1, 'adb', {
          c: {
            b: 1,
            g: 5,
          },
        }],
        d: {
          d: 'yo',
          c: [23.5, 22],
        },
        r: undefined,
        s: null,
      },
    )).toBeTruthy();
  });

  it('should support Array', () => {
    expect(deepEqual([], null)).toBeFalsy();
    expect(deepEqual([], [])).toBeTruthy();
  });

  it('should support String', () => {
    expect(deepEqual('yo', null)).toBeFalsy();
    expect(deepEqual('yo', 'yo')).toBeTruthy();
  });

  it('should support number', () => {
    expect(deepEqual(12, 12.2)).toBeFalsy();
    expect(deepEqual(12.30, 12.3)).toBeTruthy();
    expect(deepEqual(12.30, null)).toBeFalsy();
    expect(deepEqual(12, 12)).toBeTruthy();
  });

  it('should handle null', () => {
    expect(deepEqual(undefined, null)).toBeFalsy();
    expect(deepEqual(null, null)).toBeTruthy();
  });

  it('should handle undefined', () => {
    expect(deepEqual(undefined, null)).toBeFalsy();
    expect(deepEqual(undefined, undefined)).toBeTruthy();
  });
});
