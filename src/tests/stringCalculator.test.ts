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
});
