export function stringCalculatorV1(text: string, separator: string = ','): number {
  if (text === '' || text === null || text.match(/\d/g) === null) return 0;

  if (!text.includes(separator)) {
    text = text.replace(/[A-Za-z\W_]/g, '');
    let newText: string = '';
    for (let i: number = 0; i < text.length; i++) {
      newText = newText + text.charAt(i);
    }
    return Number(newText);
  } else {
    const extractedDigits: RegExpMatchArray = text.match(/\d/g);
    let result: number = 0;
    for (let i: number = 0; i < extractedDigits.length; i++) {
      result = result + Number(extractedDigits[i]);
    }
    return result;
  }
}
