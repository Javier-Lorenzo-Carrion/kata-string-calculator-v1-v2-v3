export function stringCalculatorV1(text: string, separator: string = ','): number {
  if (text === '' || text === null) return 0;
  if (text.includes(separator)) {
    text = text.replace(/[A-Za-z\W_]/g, '');
    let result: number = 0;
    for (let i: number = 0; i < text.length; i++) {
      result = result + Number(text.charAt(i));
    }
    return result;
  } else {
    return Number(text);
  }
}
