import { stringCalculatorV1 } from '../core/stringCalculator';

describe('String Calculator version 1 should', () => {
  it('return 0 for an empty text', () => {
    expect(stringCalculatorV1('')).toBe(0);
  });
  it('return 0 for null', () => {
    expect(stringCalculatorV1(null)).toBe(0);
  });
  it('return the same number for a number in format text', () => {
    expect(stringCalculatorV1('56')).toBe(56);
  });
  it('return the sum for numbers separated by commas', () => {
    expect(stringCalculatorV1('5,6')).toBe(11);
  });
  it('return the sum for only numbers and ignore letters or symbols', () => {
    expect(stringCalculatorV1('5,6,a3')).toBe(11);
    expect(stringCalculatorV1('5,6,a,3')).toBe(14);
  });
  it('return the sum for numbers separated by a symbol indicated as an input', () => {
    expect(stringCalculatorV1('5*6*4a', '*')).toBe(15);
  })
  it('return 0 for text without numbers', () => {
    expect(stringCalculatorV1('b')).toBe(0);
  })
});
