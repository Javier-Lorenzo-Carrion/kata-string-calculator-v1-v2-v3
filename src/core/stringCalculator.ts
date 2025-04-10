export function stringCalculatorV1(text: string, separator: string = ','): number {
  if (text === '' || text === null || text.match(/\d/g) === null) return 0;

  if (text.includes(separator)) {
    const separatedText: string[] = text.split(separator);
    let textResult: number = 0;
    for (let i: number = 0; i < separatedText.length; i++) {
      if (Number(separatedText[i])) textResult = textResult + Number(separatedText[i]);
    }
    return textResult;
  }
  return Number(text);
}
