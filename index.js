// https://stackoverflow.com/a/32922084/1866804
const deepEqual = (x, y) => {
  const ok = Object.keys;
  const tx = typeof x;
  const ty = typeof y;

  return x && y && tx === 'object' && tx === ty ? (
    ok(x).length === ok(y).length
    && ok(x).every((key) => deepEqual(x[key], y[key]))
  ) : (x === y);
};

module.exports = deepEqual;
