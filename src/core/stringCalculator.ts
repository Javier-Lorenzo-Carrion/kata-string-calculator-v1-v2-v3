export function stringCalculatorV1(text: string): number {
  if (text === '' || text === null) return 0;
  if (text.includes(',')) {
    text = text.replace(',', '');
    let result: number = 0;
    for (let i: number = 0; i < text.length; i++) {
      result = result + Number(text.charAt(i));
    }
    return result;
  } else {
    return Number(text);
  }
}
