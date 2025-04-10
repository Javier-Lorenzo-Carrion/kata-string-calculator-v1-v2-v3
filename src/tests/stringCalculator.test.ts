import { stringCalculatorV1 } from '../core/stringCalculator';

describe('String Calculator version 1 should', () => {
  it('return 0 when the input is an empty text', () => {
    expect(stringCalculatorV1('')).toBe(0);
  });
  it('return 0 when the input is null', () => {
    expect(stringCalculatorV1(null)).toBe(0);
  });
});
