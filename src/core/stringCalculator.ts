function textCanNotBeCalculated(text: string) {
  const textIsEmpty = !text;
  const textHasNoDigits = text.match(/\d/g) === null;
  return textIsEmpty || textHasNoDigits;
}

function sumAllElementsOfText(text: string, separator: string) {
  const elements: string[] = text.split(separator);
  let result: number = 0;
  for (const element of elements) {
    const elementIsNumber: number = Number(element);
    if (elementIsNumber) {
      result += elementIsNumber;
    }
  }
  return result;
}

export function stringCalculatorV1(text: string, separator: string = ','): number {
  if (textCanNotBeCalculated(text)) return 0;

  const textOnlyHasOneDigit = !text.includes(separator);
  if (textOnlyHasOneDigit) {
    return Number(text);
  }
  return sumAllElementsOfText(text, separator);
}

function parseToNumber(eachChar: string) {
  return Number(eachChar);
}

function isNumber(eachNumber: number) {
  return !isNaN(eachNumber);
}

export function stringCalculatorV2(text: string, separator: string = ','): number {
  return text
    .split(separator)
    .map(parseToNumber)
    .filter(isNumber)
    .reduce((currentNumber: number, nextNumber: number) => currentNumber + nextNumber, 0);
}

export function stringCalculatorV3(text: string, separator: string = ','): number {
  const items = text.split(separator);
  let result = 0;
  for (const item of items) {
    Number(item) ? (result += Number(item)) : 0;
  }
  return result;
}

// TODO: hacer una version con recursividad
