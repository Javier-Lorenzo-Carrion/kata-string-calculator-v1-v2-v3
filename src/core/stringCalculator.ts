export function stringCalculatorV1(text: string, separator: string = ','): number {
  if (text === '' || text === null || text.match(/\d/g) === null) return 0;

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

export function stringCalculatorV2(text: string): number {
  return Number(text ?? '');
}
