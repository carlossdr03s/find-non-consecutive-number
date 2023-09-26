const firstNonConsecutive = require('./index');

test('passes an empty array', () => {
    expect(firstNonConsecutive([])).toEqual(null);
});

test('passes a single value', () => {
  expect(firstNonConsecutive([1])).toEqual(null);
});

// test('passes an list of of consecutive numbers until 4, then skips to 6 until 8', () => {
//   expect(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])).toEqual(6);
// });

// test('passes an list of consecutive numbers until 8', () => {
//   expect(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 8])).toEqual(null);
// });

// test('passes an list of string', () => {
//   expect(firstNonConsecutive('hello world')).toEqual(expect.any(Number));
// });

