export function stringCalculatorV1(text: string, separator: string = ','): number {
  if (text === '' || text.match(/\d/g) === null) return 0;

  if (text.includes(separator)) {
    const separatedText: string[] = text.split(separator);
    let textResult: number = 0;
    for (let i: number = 0; i < separatedText.length; i++) {
      const itemIsNumber: number = Number(separatedText[i]);
      if (itemIsNumber) textResult = textResult + itemIsNumber;
    }
    return textResult;
  }
  return Number(text);
}

export function stringCalculatorV2(text: string, separator: string = ','): number {
  return text
    .split(separator)
    .map((eachChar: string): number => Number(eachChar))
    .filter((eachNumber: number): boolean => !isNaN(eachNumber))
    .reduce((currentNumber: number, nextNumber: number) => currentNumber + nextNumber, 0);
}
